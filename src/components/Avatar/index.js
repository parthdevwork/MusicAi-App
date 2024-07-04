import { TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import MText from "../Text";
import { styles } from "./style";

const Avatar = ({
  Aview,
  Atouchable,
  handleButton,
  Alabel,
  AlabelStyle,
  AlabelView,
  imagepath,
}) => {
  return (
    <ImageBackground
      source={{ uri: imagepath }}
      imageStyle={{ borderRadius: 120 / 2 }}
      style={[styles.container, Aview]}
    >
      <TouchableOpacity
        style={[styles.touchableView, Atouchable]}
        onPress={handleButton}
      >
        <MText
          label={Alabel}
          viewStyle={[styles.txtView, AlabelView]}
          labelStyle={[styles.touchLabel, AlabelStyle]}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Avatar;