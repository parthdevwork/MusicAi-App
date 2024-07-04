import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";
import { FONTSIZE } from "../../constants/font";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  back: {
    fontSize: FONTSIZE.ELEVEN,
    color: COLORS.GRAY[200],
  },
  topTitle: {
    fontWeight: "bold",
    color: COLORS.GRAY[200],
    alignSelf: "center",
    fontSize:FONTSIZE.FIFTEEN
  },
  imgStyle: {
    backgroundColor: COLORS.WHITE[100],
    marginTop: scale(20),
    alignSelf: "center",
    borderRadius: 6,
    width: "80%",
    height: scale(140),
  },
  scoreView: {
    resizeMode: "stretch",
    marginTop: scale(20),
    alignSelf: "center",
    borderRadius: 6,
    width: "80%",
    height: scale(140),
  },
  bottomView: {
    marginTop: scale(25),
    alignSelf: "center",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linearBtn: {
    width: "45%",
    height: scale(30),
    borderRadius: 6,
  },
  touchableView: {
    borderRadius: 6,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: {
    opacity: 0.5,
    fontSize: FONTSIZE.TEN,
  },
});
