import {StyleSheet} from "react-native";
import {FONTSIZE} from "../../constants/font";
import {COLORS} from "../../constants/color";

const MButtonStyle = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 34,
    backgroundColor: COLORS.WHITE[100],
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    fontSize: FONTSIZE.SIXTEEN,
    color: COLORS.BLACK[200],
    alignSelf: "center",
    alignItems: "center",
  },
  viewLable: {alignItems: "center", justifyContent: "center"},
});
export default MButtonStyle;
