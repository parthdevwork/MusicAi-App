const {StyleSheet} = require("react-native");
const {scale} = require("react-native-size-matters");
const {COLORS} = require("../../constants/color");

export const MCheckboxStyle = StyleSheet.create({
  touchable: {
    width: scale(30),
    borderColor: COLORS.WHITE[100],
    height: scale(30),
    borderWidth: 2,
  },
});
