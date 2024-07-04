import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";
import { FONTSIZE } from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  container: {
    paddingHorizontal: 20,
  },
  titlelabel: {
    fontWeight: "bold",
    fontSize: FONTSIZE.FIFTEEN,
    // marginTop: 20,
    color: COLORS.WHITE[100],
    // paddingVertical: 5,
  },
  flat: {
    flex: 1,
    width: "100%",
    marginTop: 30,
    borderRadius: 5,
  },
  titleText: {
    color: COLORS.GRAY[200],
    fontSize: FONTSIZE.TEN,
  },
  subTitle: {
    color: COLORS.WHITE[100],
    // width: "80%",
    fontSize: FONTSIZE.TEN,
    fontWeight: "bold",
    // backgroundColor:"red"
  },
  linear: {
    flexDirection: "row",
    marginBottom: scale(-10),
    padding: 5,
    borderRadius: 5,
    justifyContent: "space-around",
    // height: "100%",
  },
  imgStyle: {
    height: 80,
    width: 100,
    borderRadius: 8,
  },
  renderView: {
    flexDirection: "column",
    width: "45%",
    marginVertical: 10,
  },
  date: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.TEN,
    top: 10,
  },
  playView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    top: 15,
    justifyContent: "center",
  },
  lablebox: {
    // marginTop:5,
    alignSelf: "center",
    height:scale(40),
    justifyContent:'center',
    // backgroundColor:"red"
  },
});
