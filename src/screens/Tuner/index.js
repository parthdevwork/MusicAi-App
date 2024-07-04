import {
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import MGradient from "../../components/Gradient";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import {styles} from "./style";
import {COLORS} from "../../constants/color";
import {Tunning} from "./tunning.js";
import Meter from "./meter";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {NAVKEY} from "../../constants/navkey";
import Header from "../../components/Header/index";

const Tuner = () => {
  const navigation = useNavigation();
  const [tone, setTone] = useState(true);
  const [note, setNote] = useState({
    name: "A",
    octave: 4,
    frequency: 440,
  });

  const _update = note => {
    setNote({note});
    // console.log("🚀 ~ file: index.js ~ line 33 ~ Tuner ~ note", note);
  };

  useEffect(() => {
    async function checkPermission() {
      if (Platform.OS === "android") {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
      }
      playTuner();
    }

    checkPermission();
  }, [tone]);
  const playTuner = () => {
    const tunner = new Tunning();
    if (tone === true) {
      tunner.start();
      tunner.onNoteDetected = note => {
        if (this._lastNoteName === note.name) {
          _update(note);
          console.log("Not no log-->", note);
        } else {
          this._lastNoteName = note.name;
        }
      };
    } else {
      tunner.stop();
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header />
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <MText
          label={STRING.TUNER.TUNER}
          viewStyle={styles.headerView}
          labelStyle={styles.headerLabel}
        />
        <MGradient linearView={styles.linearSetting}>
          <TouchableOpacity
            style={styles.touchableSettings}
            onPress={() => {
              navigation.navigate(NAVKEY.TUNE_SETTINGS);
            }}>
            <Icon
              name="settings"
              type="material"
              color={COLORS.WHITE[100]}
              size={25}
            />
          </TouchableOpacity>
        </MGradient>
      </View>
      <View style={styles.container}>
        <MText label={STRING.TUNER.FLAT} labelStyle={styles.flatTone} />
        <MGradient linearButton={true} linearView={styles.btnView}>
          {console.log("note?.name", note?.note?.name)}
          <MText
            label={
              note?.note?.name === undefined ? note?.name : note?.note?.name
            }
            labelStyle={styles.gradientLabel}
          />
          <MText
            label={
              note?.note?.octave === undefined
                ? note?.octave
                : note?.note?.octave
            }
            labelStyle={styles.four}
          />
        </MGradient>
        <MText label={STRING.TUNER.SHARP} labelStyle={styles.sharpLabel} />
      </View>
      <MText
        label={STRING.TUNER.GOT_IT}
        labelStyle={styles.gotIt}
        viewStyle={styles.gotItView}
      />
      {tone ? (
        <>
          <Meter data={note} />
        </>
      ) : (
        <MImage
          src={IMAGES.TON_GEN}
          viewStyle={styles.toneImgView}
          imageStyle={styles.toneImg}
        />
      )}

      <View style={styles.secondContainer}>
        <MGradient
          lBtnView={[
            styles.touchableView,
            {backgroundColor: tone ? null : COLORS.BLACK[200]},
          ]}
          linearButton={true}
          linearView={styles.tunningView}
          lLabel={STRING.TUNER.CHROMATIC}
          linearLabel={styles.tunning}
          handleButton={() => {
            setTone(true);
          }}
        />
        <MGradient
          lBtnView={[
            styles.touchableView,
            {backgroundColor: tone ? COLORS.BLACK[200] : null},
          ]}
          linearButton={true}
          linearView={[styles.tunningView]}
          lLabel={STRING.TUNER.TONE_GENERATOR}
          linearLabel={styles.tunning}
          handleButton={() => setTone(false)}
        />
      </View>
    </SafeAreaView>
  );
};
export default Tuner;
