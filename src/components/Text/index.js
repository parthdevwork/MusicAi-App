import React from "react";
import {View} from "react-native";
import {Text} from "react-native-paper";
import MTextStyle from "./style";

const MText = ({label, labelStyle, viewStyle, children, numberOfLines}) => {
  return (
    <View style={[MTextStyle.viewContainer, viewStyle]}>
      <Text
        numberOfLines={numberOfLines}
        style={[MTextStyle.labelText, labelStyle]}>
        {label}
        {children}
      </Text>
    </View>
  );
};

export default MText;
