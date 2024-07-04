import {StyleSheet} from "react-native";
import { COLORS } from "../../constants/color";
import { FONTSIZE } from "../../constants/font";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    // backgroundColor:'blue',
    // marginTop:5,
    alignItems: "center",
  },
  back: {
    color: COLORS.GRAY[300],
    fontSize: FONTSIZE.THIRTEEN,
    margin:10
  },
});
