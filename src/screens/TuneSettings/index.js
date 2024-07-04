import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/color";
import MGradient from "../../components/Gradient";
import { Icon } from "react-native-elements";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { NAVKEY } from "../../constants/navkey";
import MText from "../../components/Text";
import { STRING } from "../../constants/string";
import MTextInput from "../../components/TextInput";
import { FONTSIZE } from "../../constants/font";
import { Tabbarstatic } from "../../navigation/Tabbar/tabbarstatic";

const TuneSettings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <MGradient linearView={styles.linearBack}>
        <TouchableOpacity
          style={styles.touchableBack}
          onPress={() => {
            navigation.navigate(NAVKEY.TUNER);
          }}
        >
          <Icon
            name="arrow-back"
            type="material"
            size={30}
            color={COLORS.WHITE[100]}
          />
        </TouchableOpacity>
      </MGradient>
      <MText
        label={STRING.TUNE_SETTING.TITLE}
        labelStyle={styles.title}
        viewStyle={styles.titleView}
      />

      <View
        style={{
          backgroundColor: COLORS.GRAY[300],
          marginTop: scale(20),
          marginHorizontal: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MText
            label={"Concert A:"}
            labelStyle={{ fontSize: FONTSIZE.TWELVE }}
          >
            <MTextInput
              placeholder={"____________"}
              parentContainer={{
                backgroundColor: COLORS.GRAY[300],
                width: scale(100),
                height: scale(40),
              }}
            />
            <MText label={" Hz"} labelStyle={{ fontSize: FONTSIZE.TWELVE }} />
          </MText>
        </View>
        <MText
          label={"Callibrate:"}
          labelStyle={{ fontSize: FONTSIZE.TWELVE }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MText
            label={"Input frequency:"}
            labelStyle={{ fontSize: FONTSIZE.TWELVE }}
          />
          <MTextInput
            placeholder={"_____"}
            parentContainer={{
              backgroundColor: COLORS.GRAY[300],
              width: scale(60),
              height: scale(30),
            }}
            inputStyle={{ width: scale(60) }}
          />
          <MText label={" Hz"} labelStyle={{ fontSize: FONTSIZE.TWELVE }} />
        </View>
        <MText
          label={"Start calibration"}
          labelStyle={{ fontSize: FONTSIZE.TWELVE }}
        />
        <MText
          label={"Current Calibration"}
          labelStyle={{ fontSize: FONTSIZE.TWELVE }}
        />
        <View style={{ flexDirection: "row" }}>
          <MText
            label={"Calibration factor: 100.00%Hz"}
            labelStyle={{ fontSize: FONTSIZE.TWELVE }}
          />
          <MTextInput
            placeholder={"_____"}
            parentContainer={{
              backgroundColor: COLORS.GRAY[300],
              width: scale(50),
              height: scale(40),
            }}
          />
          <MText label={"Reset"} labelStyle={{ fontSize: FONTSIZE.TWELVE }} />
        </View>

        <MText
          label={"Transposition:"}
          labelStyle={{ fontSize: FONTSIZE.TWELVE }}
        />
        <MText
          label={"Temperament:"}
          labelStyle={{ fontSize: FONTSIZE.TWELVE }}
        />
        <MText
          label={"Cents range:"}
          labelStyle={{ fontSize: FONTSIZE.TWELVE }}
        />
      </View>
      <Tabbarstatic/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  linearBack: {
    width: scale(100),
    height: scale(35),
    alignSelf: "flex-end",
    borderRadius: 6,
    alignItems: "center",
  },
  touchableBack: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    borderRadius: 6,
  },
  title: {
    alignSelf: "center",
  },
  titleView: {
    marginTop: scale(30),
  },
});

export default TuneSettings;