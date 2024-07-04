import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  container: {
    marginHorizontal: scale(20),
    height: "85%",
    marginTop: scale(10),
  },
  title: {
    fontWeight: "bold",
    // left: 5,
  },
  lablebox: {
    // marginTop:5,
    alignSelf: "center",
    height:scale(35),
    justifyContent:'center',
    // backgroundColor:"red"
  },
  renderView: {
    width: "100%",
    height: scale(220),
    marginTop: 20,
  },

  imageView: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
  },
  labels: {
    color: COLORS.WHITE[100],
    fontWeight: "bold",
    fontSize: FONTSIZE.SIXTEEN,
  },
  labelView: {
    position: "absolute",
    top: scale(170),
    left: scale(30),
  },
});
