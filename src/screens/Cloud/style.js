import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  container: {
    margin: moderateScale(20),
  },
  title: {
    fontWeight: "bold",
  },
  renderView: {
    width: "100%",
    height: scale(160),
    backgroundColor:COLORS.GRAY[100],
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center'
  },

  imageView: {
    width: "100%",
    backgroundColor: COLORS.BLACK[500],
    borderRadius: 8,
  },
});
