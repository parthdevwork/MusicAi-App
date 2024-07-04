import {ScrollView, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import {COLORS} from "../../constants/color";
import MGradient from "../../components/Gradient";
import MButton from "../../components/Button";
import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import {Icon} from "react-native-elements";
import {styles} from "./style";
import {useNavigation} from "@react-navigation/native";
import {NAVKEY} from "../../constants/navkey";
import Header from "../../components/Header/index";


const Metronome = () => {
  
  const navigation = useNavigation();
  const [play, setPlay] = useState(false);
  const checkPlay = () => {
    setPlay(!play);
  };

  return (
    <ScrollView style={{backgroundColor: COLORS.BLACK[600]}}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={{flexDirection: "row"
        ,justifyContent:'space-between',
        alignSelf:'center',
        width:'90%',
        
        }}>
          {/* <Header /> */}
          <MText
            label={STRING.METRONOME.METRONOME}
            labelStyle={styles.title}
            viewStyle={styles.titleView}
          />
          <MGradient linearView={styles.linearSetting}>
            <TouchableOpacity
              style={styles.touchableSetting}
              onPress={() => {
                navigation.navigate(NAVKEY.METRONOME_SETTINGS);
              }}>
              <Icon
                name="settings"
                type="material"
                size={25}
                color={COLORS.WHITE[100]}
              />
            </TouchableOpacity>
          </MGradient>
        </View>

        <View style={styles.container}>
          <MGradient
            linearButton={true}
            linearView={styles.linearCircle}
            handleButton={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
          <MButton
            viewStyle={styles.circleView}
            handleButton={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
          <MButton
            viewStyle={styles.circleView}
            handleButton={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
          <MButton
            viewStyle={styles.circleView}
            handleButton={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
        </View>
        <MText
          label={STRING.METRONOME.PENDULUM}
          viewStyle={styles.pendulumView}
          labelStyle={styles.pendulum}
        />
        <View style={styles.parentLine}>
          <MImage
            src={IMAGES.ACTIVE}
            imageStyle={styles.activeImg}
            viewStyle={styles.activeView}
          />
        </View>

        <View style={styles.midContainer}>
          <MButton
            label={STRING.METRONOME.MINUS}
            viewStyle={styles.minusView}
            handleButton={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
            labelStyle={styles.minus}
          />

          <MText
            label={STRING.METRONOME.CROTCHET}
            viewStyle={styles.crotchetView}
            labelStyle={styles.crotchet}
          />

          <MText
            label={STRING.METRONOME[120]}
            viewStyle={styles.numberView}
            labelStyle={styles.number}
          />
          <MText
            label={STRING.METRONOME.BPM}
            viewStyle={styles.bpmView}
            labelStyle={styles.bpm}
          />
          <MButton
            label={STRING.METRONOME.PLUS}
            viewStyle={styles.plusView}
            labelStyle={styles.plus}
            handleButton={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
        </View>
        <View style={styles.bottomContainer}>
          <MText
            label={STRING.METRONOME.ADAGIO}
            viewStyle={styles.adagioView}
            labelStyle={styles.adagio}
          />
          <MText
            label={STRING.METRONOME.TAP}
            viewStyle={styles.tapView}
            labelStyle={styles.tap}
          />
        </View>
        <MGradient
          linearButton={true}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
          linearView={styles.playView}
        />
        <TouchableOpacity style={styles.playIcon} onPress={checkPlay}>
          {play ? (
            <Icon
              name="play-arrow"
              size={40}
              color={COLORS.WHITE[100]}
              type="material"
            />
          ) : (
            <Icon
              name="pause"
              size={40}
              color={COLORS.WHITE[100]}
              type="material"
            />
          )}
        </TouchableOpacity>
        <MText
          label={STRING.METRONOME.DIVIDE}
          viewStyle={{bottom: 120, fontSize: 18, width: 30, left: 50}}
        />
        <MText
          label={STRING.METRONOME.CROTCHET1}
          viewStyle={{
            bottom: 140,
            fontSize: 18,
            width: 30,
            right: 30,
            alignSelf: "flex-end",
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
export default Metronome;
