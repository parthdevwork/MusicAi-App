import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import MImageStyle from "./style";

const MImage = ({
  src,
  imageStyle,
  viewStyle,
  pressable,
  imagePress,
  touchStyle,
}) => {
  return (
    <View style={[MImageStyle.viewContainer, viewStyle]}>
      {pressable === true ? (
        <TouchableOpacity
          style={[MImageStyle.touchbleView, touchStyle]}
          onPress={imagePress}>
          <Image
            source={src}
            style={[MImageStyle.imageContainer, imageStyle]}
          />
        </TouchableOpacity>
      ) : (
        <Image source={src} style={[MImageStyle.imageContainer, imageStyle]} />
      )}
    </View>
  );
};

export default MImage;
