const { StyleSheet } = require("react-native");
import { COLORS } from "../../constants/color";

export const MTextInputStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "5%",
    backgroundColor: COLORS.GRAY[100],
    borderRadius: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "87%",
    alignItems: "center",
    justifyContent: "center",

  },
});
