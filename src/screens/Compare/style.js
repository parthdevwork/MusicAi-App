import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  titleView: {
    alignSelf: "center",
  },
  titleLabel: {
    fontWeight: "700",
  },
  contain: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },

  imgView: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: COLORS.GRAY[200],
    height: scale(350),
  },
  btnContainer: {
    flexDirection: "row",
    marginHorizontal: scale(20),
    marginTop: scale(50),
    justifyContent: "space-between",
  },
  btnView: { width: scale(150), height: scale(40) },
  subBtnContainer: {
    flexDirection: "row",
    marginHorizontal: scale(20),
    justifyContent: "space-between",
    marginTop: scale(20),
  },
});
