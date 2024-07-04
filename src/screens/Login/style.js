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
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
    marginHorizontal: scale(50),
  },
  introView: {marginTop: scale(50)},
  introLabel: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.TWENTY_FIVE,
  },
  linearStyle: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(130) / 2,
    alignSelf: "center",
    marginTop: scale(30),
  },
  inputContainer: {
    marginTop: "10%",
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
  rememberView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: scale(170),
    marginVertical: scale(30),
  },
  rememberLabel: {
    color: COLORS.GRAY[200],
    fontSize: FONTSIZE.TEN,
    right: scale(50),
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnGradientView: {
    width: scale(110),
    alignItems: "center",
    borderRadius: 6,
    height: scale(30),
  },
  btnLabel: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.ELEVEN,
  },
  linearView: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
});
