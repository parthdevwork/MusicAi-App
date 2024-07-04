import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: COLORS.BLACK[200],
  },
  safeContainer: {
    flex: 1,
    margin: "13%",
  },
  createView: {
    alignItems: "center",
    marginTop: scale(20),
  },
  createLabel: {
    fontSize: FONTSIZE.TWENTY_ONE,
    color: COLORS.WHITE[100],
  },
  photoTxtView: {
    marginTop: scale(10),
    alignSelf: "center",
  },
  photoTxt: {
    color: COLORS.WHITE[200],
    fontSize: FONTSIZE.EIGHTEEN,
  },
  inputContainer: {
    marginTop: scale(60),
    minHeight: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: scale(35),
    marginLeft: 10,
    fontSize: FONTSIZE.TWELVE,
    color: COLORS.GRAY[200],
    alignSelf: "center",
  },
  instrumentLabel: {
    color: COLORS.WHITE[200],
    fontSize: FONTSIZE.TWELVE,
  },
  gradientBtnView: {
    width: scale(120),
    height: scale(30),
    borderRadius: 8,
    marginTop: scale(10),
  },
  gradientLabel: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.ELEVEN,
    opacity: 0.8,
  },
});
