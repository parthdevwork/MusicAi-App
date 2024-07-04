import React from "react";
import { View, ImageBackground } from "react-native";
import MImageBackStyle from "./style";


const MImageBack = ({ children, src, viewStyle, imageStyle }) => {
  return (
    <View style={[MImageBackStyle.viewContainer, viewStyle]}>
      <ImageBackground
        source={src}
        style={[MImageBackStyle.imageContain, imageStyle]}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default MImageBack;
