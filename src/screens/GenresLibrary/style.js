import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../../constants/color";
import { FONTSIZE } from "../../constants/font";

export const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: "black",
    },
    container: {
      paddingHorizontal: 20,
    },
    titlelabel: {
      fontWeight: "bold",
      fontSize: FONTSIZE.FIFTEEN,
      // marginTop: 20,
      color: COLORS.WHITE[100],
      // fontSize: FONTSIZE.THIRTY,
      // marginTop: 20,
      // color: "#ffffff",
    },
    lablebox: {
      // marginTop:5,
      // position:'absolute',
      alignSelf: "center",
      height:scale(35),
      justifyContent:'center',
      // backgroundColor:"red"
    },
    Genresflat: {
      width: 270,
    },
    flat: {
      width: "100%",
      height: "65%",
      marginTop: 20,
      borderRadius: 5,
    },
    linear: {
      flexDirection: "row",
      marginBottom: 10,
      padding: 5,
      borderRadius: 5,
      justifyContent: "space-around",
      backgroundColor: "#252525",
    },
    imgStyle: {height: 80, width: 100, borderRadius: 8,resizeMode:"stretch"},
  
    titleText: {
      color: COLORS.GRAY[200],
      fontSize: FONTSIZE.TEN,
    },
    subTitle: {
      color: COLORS.WHITE[100],
      width: scale(90),
      fontSize: FONTSIZE.TEN,
      fontWeight: "bold",
    },
  });