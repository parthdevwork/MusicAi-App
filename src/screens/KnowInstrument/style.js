import {StyleSheet} from "react-native";
import {scale, verticalScale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: COLORS.BLACK[200],
    flex: 1,
  },
  container: {
    margin: scale(40),
  },
  logo: {
    height: scale(200),
  },
  title: {
    fontWeight: "bold",
    fontSize: FONTSIZE.TWENTY,
    marginBottom: verticalScale(20),
    width: scale(250),
    marginTop: scale(40),
  },
});
