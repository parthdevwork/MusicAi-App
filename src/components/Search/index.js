import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { COLORS } from "../../constants/color";

const MSearchbar = ({
  iconname,
  iconcolor,
  onChangeText,
  value,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={COLORS.GRAY[200]}
        style={styles.textstyle}
      ></TextInput>
      <Icon name={iconname} size={30} color={iconcolor} type="material" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: COLORS.GRAY[600],
    marginTop: 30,
    height: 45,
    borderRadius: 5,
  },
  textstyle: {
    backgroundColor: COLORS.GRAY[600],
    width: 250,
    height: 40,
    paddingLeft: 10,
    fontSize: 18,
    color: COLORS.GRAY[200],
  },
});

export default MSearchbar;
