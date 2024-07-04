import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import { FONTSIZE } from "../../constants/font";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.BLACK[200],
  },
  textHeader: {
    fontSize: FONTSIZE.SIXTEEN,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  lablebox: {
    // marginTop:5,
    alignSelf: "center",
    height:scale(35),
    justifyContent:'center',
    // backgroundColor:"red"
  },
  textsub: {
    width: scale(80),
    fontSize: FONTSIZE.TEN,
    fontWeight: "400",
    color: "grey",
    alignSelf: "center",
    marginVertical: 20,
  },
  imageStyle: {
    height: "34%",
    width: "100%",
  },
  leftArrow: {
    width: 25,
    height: 25,
    marginHorizontal: 45,
    tintColor: "gray",
  },
  pauseBorder: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "gray",
  },
  pauseButton: {},
  musicHendel: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 55,
  },
  practisBtnStyle: {
    width: "40%",
    height: 35,

    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  practisText: {
    alignSelf: "center",
    color: "white",
    fontSize: FONTSIZE.TEN,
  },
  sliderIMG: {
    alignSelf: "center",
    top: 40,
    width: 200,
  },
  play: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

