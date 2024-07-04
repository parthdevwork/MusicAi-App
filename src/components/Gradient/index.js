import { TouchableOpacity } from "react-native";
import React, { Children } from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../constants/color";
import MImage from "../Image";
import MText from "../Text";
import { MGradientStyle } from "./style";

const MGradient = ({
  linearView,
  linearImage,
  limage,
  lIView,
  lIStyle,
  linearButton,
  handleButton,
  lLabel,
  linearLabel,
  lBtnView,
  children,
}) => {
  return (
    <LinearGradient
      colors={[COLORS.PURPLE[100], COLORS.BLUE[100]]}
      style={[MGradientStyle.linearGradient, linearView]}
    >
      {children}
      {linearImage && (
        <MImage
          src={limage}
          viewStyle={[MGradientStyle.lImageView, lIView]}
          imageStyle={[MGradientStyle.imgStyle, lIStyle]}
        />
      )}
      {linearButton && (
        <TouchableOpacity
          style={[MGradientStyle.lButtonView, lBtnView]}
          onPress={handleButton}
        >
          <MText
            label={lLabel}
            labelStyle={[MGradientStyle.lLabelStyle, linearLabel]}
          />
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default MGradient;
