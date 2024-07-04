import {StyleSheet} from "react-native";
import { scale } from "react-native-size-matters";
import {COLORS} from "../../constants/color";

export const MDropDownStyle = StyleSheet.create({
  container: {},
  dropdownStyle: {
    backgroundColor: COLORS.GRAY[100],
    padding: 8,
    borderRadius: 6,
    minHeight: 42,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  optionView: {
    backgroundColor: COLORS.GRAY[100],
    borderRadius: 8,
    padding:scale(10)
  },
});
