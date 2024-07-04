import React from "react";
import {TouchableOpacity} from "react-native";
import MText from "../Text";
import MButtonStyle from "./style";

const MButton = ({
  children,
  label,
  props,
  labelStyle,
  lableView,
  viewStyle,
  handleButton,
  disable,
  inputbutton,
}) => {
  return (
    <TouchableOpacity
      style={[MButtonStyle.buttonContainer, viewStyle]}
      disabled={disable}
      onPress={inputbutton ? handleButton(props) : () => handleButton(props)}>
      {children}
      {label !== undefined && (
        <MText
          label={label}
          labelStyle={[MButtonStyle.labelContainer, labelStyle]}
          viewStyle={[MButtonStyle.viewLable, lableView]}
        />
      )}
    </TouchableOpacity>
  );
};

export default MButton;
