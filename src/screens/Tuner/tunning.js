import Recording from "react-native-recording";
import PitchFinder from "pitchfinder";

export class Tunning {
  middleA = 440;
  semitone = 69;
  noteStrings = [
    "A",
    "Bb",
    "B",
    "C",
    "C#",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
  ];

  constructor(sampleRate = 44100, bufferSize = 1024) {
    this.sampleRate = sampleRate;
    this.bufferSize = bufferSize;
    this.pitchFinder = new PitchFinder.YIN({sampleRate: this.sampleRate});
  }

  start() {
    // console.log("Start");
    Recording.init({
      sampleRate: this.sampleRate,
      bufferSize: this.bufferSize,
    });
    // console.log("sampleRate-->", this.sampleRate);
    Recording.start();
    // console.log("dd");
    Recording.addRecordingEventListener(data => {
      const frequency = this.pitchFinder(data);
      if (frequency && this.onNoteDetected) {
        const note = this.getNote(frequency);
        this.onNoteDetected({
          name: this.noteStrings[note % 12],
          value: note,
          cents: this.getCents(frequency, note),
          octave: parseInt(note / 12) - 1,
          frequency: frequency,
        });
      }
    });
  }

  stop() {
    console.log("stop");
    Recording.stop();
  }
  /**
   * get musical note from frequency
   *
   * @param {number} frequency
   * @returns {number}
   */
  getNote(frequency) {
    const note = 12 * (Math.log(frequency / this.middleA) / Math.log(2));
    return Math.round(note) + this.semitone;
  }

  /**
   * get the musical note's standard frequency
   *
   * @param note
   * @returns {number}
   */
  getStandardFrequency(note) {
    return this.middleA * Math.pow(2, (note - this.semitone) / 12);
  }

  /**
   * get cents difference between given frequency and musical note's standard frequency
   *
   * @param {float} frequency
   * @param {int} note
   * @returns {int}
   */
  getCents(frequency, note) {
    return Math.floor(
      (1200 * Math.log(frequency / this.getStandardFrequency(note))) /
        Math.log(2),
    );
  }
}