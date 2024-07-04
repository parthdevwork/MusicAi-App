import {TextInput, View} from "react-native";
import React from "react";

import {MTextInputStyle} from "./style";
import {Icon} from "react-native-elements";

const MTextInput = ({
  parentContainer,
  isLefticon,
  iconStyle,
  iconName,
  iconType,
  iconSize,
  iconColor,
  secureTextEntry,
  value,
  placeholder,
  placeholderTextColor,
  onChangeText,
  inputStyle,
  onBlur,
  keyboardType,
  maxLength
}) => {
  return (
    <View style={[MTextInputStyle.container, parentContainer]}>
      {isLefticon && (
        <Icon
          style={iconStyle}
          name={iconName}
          type={iconType}
          size={iconSize}
          color={iconColor}
        />
      )}
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onBlur={onBlur}
        maxLength={ maxLength}
        autoCapitalize="none"                    
        onChangeText={onChangeText}
        style={[MTextInputStyle.input, inputStyle]}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default MTextInput;
