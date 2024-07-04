import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  renderView: {
    backgroundColor: COLORS.GRAY[200],
    margin: scale(15),
  },
  contentView: {},
  contentLabel: {
    margin: scale(15),
  },
  btnView: {
    width: scale(320),
    height: scale(40),
    alignSelf: "center",
    marginTop: scale(20),
  },
});
