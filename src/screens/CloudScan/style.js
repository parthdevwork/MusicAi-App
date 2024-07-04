import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: COLORS.BLACK[200],
    },
    fileView: {
      width: "85%",
      height: scale(60),
      alignSelf: "center",
      marginTop: scale(20),
      justifyContent: "flex-start",
      backgroundColor: COLORS.GRAY[200],
    },
    fileLabel: {
      paddingHorizontal: scale(20),
      marginTop: scale(20),
    },
  });
  