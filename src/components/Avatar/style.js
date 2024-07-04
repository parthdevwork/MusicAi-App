const { StyleSheet,Platform } = require("react-native");
const { COLORS } = require("../../constants/color");

export const styles = StyleSheet.create({
    container: {
      width: 120,
      height: 120,
      backgroundColor: COLORS.GRAY[100],
      borderRadius: 120 / 2,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    touchableView: {
      borderColor: COLORS.GRAY[300],
      borderWidth: 2,
      borderRadius: 6,
      width: 30,
      height: 30,
      alignSelf: "center",
    },
    txtView: {
      flex: 1,
      justifyContent: "center",
    },
    touchLabel: {
      marginTop: Platform.OS === 'ios' ? 0 : -4,
      justifyContent:'center',
      alignItems:'center',
      alignSelf: "center",
      color: COLORS.GRAY[400],
      fontWeight: "bold",
    },
  });