import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.BLACK[200],

  },
  textHeader: {
    fontSize: FONTSIZE.FIFTEEN,
    fontWeight: "bold",
    color: COLORS.WHITE[100],
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
    fontSize: FONTSIZE.TEN,
    fontWeight: "400",
    color: "grey",
    alignSelf: "center",
    marginVertical: scale(15),
  },
  imageStyle: {
    height: "34%",
    width: "100%",
  },
  arrow: {
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  pauseBorder: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "gray",
  },
  pauseButton: {},
  musicHandel: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: scale(55),
  },
  practisBtnStyle: {
    width: "40%",
    height: 35,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: scale(80),
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
