import {COLORS} from "../../constants/color";

const {StyleSheet} = require("react-native");
const {scale} = require("react-native-size-matters");

export const TabStyle = StyleSheet.create({
  tabContainer: {
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.BLACK[600],
  },
  activeLineView: {
    position: "absolute",
    bottom: scale(73),
  },
  activeLine: {
    width: scale(75),
    height: scale(5),
  },
  subContainer: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-evenly",
  },
});
