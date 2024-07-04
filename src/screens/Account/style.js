import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[600],
  },
  container: {
    margin: scale(50),
  },
  textParent: {
    height: scale(40),
  },
  btnView: {
    width: scale(150),
    alignSelf: "flex-end",
    marginVertical: scale(20),
  },
});
