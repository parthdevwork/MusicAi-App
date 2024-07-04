import {StyleSheet} from "react-native";
import {scale, verticalScale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  logoView: {
    width: scale(250),
    height: scale(60),
    alignSelf: "center",
    marginTop: verticalScale(350),
  },
  learnView: {
    alignSelf: "center",
    width: scale(200),
    marginTop: verticalScale(20),
    alignItems: "center",
    justifyContent: "center",
  },
  learn: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.FOURTEEN,
  },
  buttonView: {
    height: scale(30),
    width: scale(130),
    alignSelf: "center",
    marginTop: verticalScale(50),
  },
  button: {
    opacity: 0.8,
    fontWeight: "400",
    fontSize: FONTSIZE.TWELVE,
  },
});
