import { StyleSheet, TouchableOpacity, View } from "react-native";
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
import { TextInput } from "react-native-paper";

const MetronomeSetting = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <MGradient linearView={styles.backGradient}>
        <TouchableOpacity
          style={styles.touchableBack}
          onPress={() => {
            navigation.navigate(NAVKEY.METRONOME);
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

      <View style={styles.container}>
        <MText
          label={STRING.METRO_SETTING.TITLE}
          viewStyle={styles.titleView}
          labelStyle={styles.title}
        />

        <View
          style={[
            styles.titleView,
            {
              flexDirection: "row",

              alignItems: "center",
              alignSelf: "center",
            },
          ]}
        >
          <MText label={STRING.METRO_SETTING.TIME} />
          <TextInput
            maxLength={3}
            style={{
              width: scale(50),
              height: scale(20),
            }}
          />

          <MText label={"/"} />
          <TextInput
            maxLength={3}
            style={{
              width: scale(50),
              height: scale(20),
            }}
          />
        </View>
        <View
          style={[
            styles.titleView,
            {
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            },
          ]}
        >
          <MText label={STRING.METRO_SETTING.BEAT} />
          <TextInput
            maxLength={3}
            style={{
              width: scale(50),
              height: scale(20),
            }}
          />
        </View>
        <MText
          label={STRING.METRO_SETTING.PENDULUM}
          labelStyle={styles.title}
          viewStyle={styles.titleView}
        />
        <MGradient
          linearButton
          lLabel={STRING.METRO_SETTING.SAVE}
          linearView={styles.gradientSave}
          lBtnView={styles.touchableSave}
          handleButton={()=>{
            navigation.navigate(NAVKEY.METRONOME)
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  backGradient: {
    width: scale(100),
    height: scale(40),
    alignSelf: "flex-end",
    borderRadius: 6,
  },
  touchableBack: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 6,
  },
  titleView: {
    marginTop: scale(30),
    borderBottomColor: COLORS.GRAY[200],
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  gradientSave: {
    marginTop: scale(50),
    alignSelf: "center",
    width: "80%",
    height: scale(30),
    borderRadius: 6,
  },
  touchableSave: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 6,
  },
});

export default MetronomeSetting;