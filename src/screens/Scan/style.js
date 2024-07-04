import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  container: {
    margin: scale(30),
  },
  scanLabel: {
    fontWeight: "bold",
  },
  imgView: {
    marginTop: scale(20),
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    height: 300,
  },
  img: {
    resizeMode: "contain",
  },
  docView: {
    marginTop: scale(30),
  },
  docLabel: {
    fontSize: FONTSIZE.FOURTEEN,
    color: COLORS.GRAY[200],
  },
  inputView: {
    marginTop: scale(20),
    height: scale(40),
  },
  dropDownView: {
    marginTop: scale(20),
    paddingHorizontal: scale(25),
  },
  addGradient: {
    alignSelf: "center",
    marginTop: scale(20),
    width: scale(150),
    borderRadius: 6,
    height: scale(30),
    marginBottom: scale(80),
  },
  addTouchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addLabel: {
    fontSize: FONTSIZE.TWELVE,
    opacity: 0.6,
  },
});
