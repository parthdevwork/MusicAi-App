import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  container: {
    margin: scale(30),
  },
  scanLabel: {
    fontWeight: "bold",
  },
  imgView: {
    marginTop: scale(20),
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: COLORS.GRAY[100],
    height: scale(200),
  },
  img: {
    resizeMode: "contain",
    height: scale(100),
    width: scale(120),
    alignSelf: "center",
    alignItems: "center",
    // justifyContent: "center",
  },
  docView: {
    marginTop: scale(30),
  },
  docLabel: {
    fontSize: FONTSIZE.THIRTEEN,
    color: COLORS.GRAY[200],
  },
  inputView: {
    marginTop: scale(20),
    height: scale(40),
  },
  dropDownView: {
    marginTop: scale(20),
    paddingHorizontal: scale(25),
  },
  addGradient: {
    alignSelf: "center",
    marginTop: scale(20),
    width: scale(150),
    borderRadius: 6,
    height: scale(30),
  },
  addTouchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addLabel: {
    fontSize: FONTSIZE.ELEVEN,
  },
});
