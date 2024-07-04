import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Dimensions,
} from "react-native";
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AVModeIOSOption,
  OutputFormatAndroidType,
} from "react-native-audio-recorder-player";
import RNFetchBlob from "rn-fetch-blob";
import {SafeAreaView} from "react-native-safe-area-context";
import MGradient from "../../components/Gradient";
import Header from "../../components/Header";
import MImage from "../../components/Image";
import MText from "../../components/Text";
import {COLORS} from "../../constants/color";
import {IMAGES} from "../../constants/image";
import {NAVKEY} from "../../constants/navkey";
import {STRING} from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import {styles} from "./style";
import {scale} from "react-native-size-matters";
import {Slider} from "react-native-elements";

const audioRecorderPlayer = new AudioRecorderPlayer();

const Record = props => {
  const [rec, setRecName] = useState("");
  const dirs = RNFetchBlob.fs.dirs;
  useEffect(() => {
    const nameSet = () => {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      setRecName(text);
    };
    nameSet();
  }, []);
  // console.log("Dirs::", dirs);

  console.log("text:", rec);
  const path = Platform.select({
    ios: `${rec}.m4a`,
    android: `${dirs.MusicDir}/${rec}.mp3`,
  });
  console.log("Path:::::::::::::::", path);
  const type = props?.route?.params?.type;
  const lessonName = props?.route?.params?.lessonName;
  const navigation = useNavigation();
  const [title, setTitle] = useState(STRING.RECORD.RECORD);
  const [recordURI, setRecordURI] = useState(null);
  const [start, setstart] = useState({
    recordSecs: 0,
    recordTime: "00:00:00",
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: "00:00:00",
    duration: "00:00:00",
  });

  const [play, setPlay] = useState(true);
  const [value, setValue] = useState(0);

  const screenWidth = Dimensions.get("screen").width;
  let playWidth =
    (start.currentPositionSec / start.currentDurationSec) * (screenWidth - 56);

  if (!playWidth) {
    playWidth = 0;
  }

  const onStartRecord = async () => {
    if (Platform.OS === "android") {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log("write external stroage", grants);

        if (
          grants["android.permission.WRITE_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.READ_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.RECORD_AUDIO"] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log("Permissions granted");
        } else {
          console.log("All required permissions not granted");
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    console.log("starteddddd");
    try {
      const audioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
        OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
      };

      const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
      setRecordURI(uri);

      audioRecorderPlayer.addRecordBackListener(e => {
        setstart({
          ...start,
          recordSecs: e.currentPosition,
          recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        });
      });
      console.log(`uri: ${uri}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setstart({
        ...start,
        recordSecs: 0,
      });
      console.log(result, `record time ${start.recordTime}`);

      //log vali api
    } catch (e) {
      alert(e);
    }
    console.log("Stopped");
  };

  const onStartPlay = async () => {
    try {
      console.log("onStartPlay");
      const msg = await audioRecorderPlayer.startPlayer(path);

      console.log(`file: ${msg}`);

      audioRecorderPlayer.addPlayBackListener(e => {
        setstart({
          ...start,
          currentPositionSec: e.currentPosition,
          currentDurationSec: e.duration,
          playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
          duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
      });
    } catch (e) {
      // console.log("ddddddd", e);
      alert(e);
    }
  };

  const onStopPlay = async () => {
    try {
      console.log("onStopPlay");
      audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();
    } catch (error) {
      console.log("eee::", error);
    }
  };

  //Seekbar
  const onStatusPress = async e => {
    try {
      console.log(e.nativeEvent);
      const touchX = e.nativeEvent.locationX;
      console.log(`touchX: ${touchX}`);

      const playWidth =
        (start.currentPositionSec / start.currentDurationSec) *
        (screenWidth - 56);
      console.log(`currentPlayWidth: ${playWidth}`);

      const currentPosition = Math.round(start.currentPositionSec);

      if (playWidth && playWidth < touchX) {
        const addSecs = Math.round(currentPosition + 1000);
        audioRecorderPlayer.seekToPlayer(addSecs);
        console.log(`addSecs: ${addSecs}`);
      } else {
        const subSecs = Math.round(currentPosition - 1000);
        audioRecorderPlayer.seekToPlayer(subSecs);
        console.log(`subSecs: ${subSecs}`);
      }
    } catch (e) {
      alert(e);
    }
  };

  const recordAudio = () => {
    if (title === STRING.RECORD.RECORD) {
      setTitle(STRING.RECORD.STOP);
      onStartRecord();
    } else {
      setTitle(STRING.RECORD.RECORD);
      onStopRecord();
    }
  };

  const playRecording = () => {
    setPlay(!play);
    play === true ? onStartPlay() : onStopPlay();
  };
  // navigation.navigate(NAVKEY.PERFORM, {
  //   type: STRING.COMPOSERLIBRARY.TITLE
  // });
  const onPress =()=>{
    if(type == "Genres Library"){

      navigation.navigate(NAVKEY.GENRES_LIB);
    }else{
      navigation.navigate(NAVKEY.COMPOSER_LIB);
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: COLORS.BLACK[200]}}>
      <View style={{ flexDirection: "row" }}>
      <Header onPress={onPress}/>
        <MText label={type} labelStyle={styles.textHeader} viewStyle={styles.lablebox} />
        </View>

        <MText label={lessonName} labelStyle={styles.textsub} />

        <Image
          style={styles.imageStyle}
          source={require("../../../assets/images/Record.png")}
        />

        <View
          style={{
            backgroundColor: COLORS.GRAY[500],
            alignSelf: "center",
            width: scale(150),
            height: scale(3),
            marginTop: scale(45),
            borderRadius: 3,
            justifyContent: "center",
          }}>
          <Slider
            value={playWidth}
            onValueChange={setValue}
            maximumValue={50}
            minimumValue={1}
            step={1}
            // trackStyle={{
            //   // height:10,
            //   height:10,
            //   backgroundColor:"red"
            // }}
            thumbStyle={{
              height: scale(15),
              width: scale(15),
              backgroundColor: "transparent",
            }}
            thumbProps={{
              children: (
                <MImage
                  src={IMAGES.PLAY_TRACK}
                  viewStyle={{
                    width: scale(15),
                    height: scale(15),
                  }}
                />
              ),
            }}
          />
          {/* <TouchableOpacity>
            <MImage
              src={IMAGES.PLAY_TRACk}
              viewStyle={{
                width: scale(15),
                height: scale(15),
              }}
            />
          </TouchableOpacity> */}
        </View>

        <View style={styles.musicHandel}>
          <MImage
            pressable
            src={IMAGES.NEXT}
            touchStyle={[styles.arrow, {transform: [{rotate: "180deg"}]}]}
            imagePress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
          <MImage
            pressable
            src={IMAGES.PLAY_BUTTON}
            touchStyle={[styles.arrow, {width: 100}]}
            imagePress={() => {
              playRecording();
            }}
          />
          <MImage
            pressable
            src={IMAGES.NEXT}
            touchStyle={styles.arrow}
            imagePress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            recordAudio();
          }}>
          <MGradient linearView={styles.practisBtnStyle}>
            <Text style={styles.practisText}>{title}</Text>
          </MGradient>
        </TouchableOpacity>
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default Record;
