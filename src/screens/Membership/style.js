import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: COLORS.BLACK[200],
    flex: 1,
  },
  container: {
    margin: scale(50),
  },
  memebershipView: {
    marginVertical: scale(20),
    backgroundColor: COLORS.GRAY[100],
    height: scale(35),
    justifyContent: "center",
    paddingHorizontal: scale(10),
    borderRadius: 6,
  },
  btnView: {
    width: scale(140),
    alignSelf: "flex-end",
    marginTop: verticalScale(20),
    height: 40,
    borderRadius: 6,
  },
  paymentView: {
    backgroundColor: COLORS.GRAY[100],
    height: scale(35),
    justifyContent: "center",
    paddingHorizontal: scale(10),
    borderRadius: 6,
  },
});
