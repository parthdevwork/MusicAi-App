import {StyleSheet} from "react-native";
import {scale, verticalScale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[600],
  },
  container: {
    flex: 1,
    margin: verticalScale(20),
  },
  photoView: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50) / 2,
  },
  heyLabel: {
    fontSize: FONTSIZE.FIFTEEN,
    color: COLORS.WHITE[100],
    fontWeight: "bold",
    marginTop: verticalScale(10),
  },
  playView: {
    marginTop: scale(20),
    width: scale(180),
  },
  playLabel: {
    color: COLORS.WHITE[100],
    fontWeight: "bold",
    fontSize: FONTSIZE.TWENTY,
  },
  renderView: {
    width: "100%",
    height: 150,

    right: scale(11),
  },
  labelView: {
    marginTop: scale(70),
    marginLeft: scale(30),
    position: "absolute",
  },
  renderImage: {
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    height: scale(120),
  },
});
