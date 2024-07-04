import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export const MGradientStyle = StyleSheet.create({
    linearGradient: {
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 18,
      textAlign: "center",
      color: COLORS.WHITE[100],
      backgroundColor: "transparent",
    },
    lImageView: {
      justifyContent: "center",
    },
    imgStyle: {
      resizeMode: "contain",
    },
    lLabelStyle: {},
    lButtonView:{},
  });