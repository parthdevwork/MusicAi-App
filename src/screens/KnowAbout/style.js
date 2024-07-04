import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";
import { FONTSIZE } from "../../constants/font";

export const styles = StyleSheet.create({
    safeContainer: {
      backgroundColor: COLORS.BLACK[200],
      flex: 1,
    },
    container: {
      margin: scale(40),
    },
    aboutView: {
      marginBottom: verticalScale(50),
    },
    aboutLabel: {
      fontSize: FONTSIZE.TWENTY_ONE,
      fontWeight: "bold",
    },
    btnViewStyle: {
      marginVertical: verticalScale(20),
      height: scale(40),
      backgroundColor: COLORS.GRAY[200],
    },
    googleLabelView: {
      width: scale(100),
      alignSelf: "flex-start",
    },
    googleLabel: {
      color: COLORS.WHITE[100],
    },
    storeView: {
      height: scale(40),
      backgroundColor: COLORS.GRAY[200],
    },
    storeLabelView: {
      width: scale(175),
      alignSelf: "flex-start",
    },
    fbLabelView: {
      alignSelf: "flex-start",
      width: scale(120),
    },
  });