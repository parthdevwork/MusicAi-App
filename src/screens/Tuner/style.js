import {StyleSheet} from "react-native";
import {scale, verticalScale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[600],
  },
  headerView: {
    alignSelf: "center",

    // alignItems: "center",
    left: scale(150),
  },
  headerLabel: {
    fontWeight: "bold",
    fontSize: FONTSIZE.FIFTEEN,
    // marginTop:scale(20)
    // marginTop: "5%",
    // alignSelf:'center'
  },
  linearSetting: {
    width: scale(100),
    height: scale(45),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 6,
  },
  touchableSettings: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    borderRadius: 6,
  },
  container: {
    // marginTop: scale(20),
    marginTop: "5%",
    flexDirection: "row",
    width: scale(300),
    // width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 4,
    borderColor: COLORS.GRAY[600],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: scale(10),
  },
  flatTone: {
    color: COLORS.GRAY[300],
    fontSize: FONTSIZE.THIRTY,
    marginRight: scale(10),
  },
  btnView: {
    width: scale(230),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  linearView: {
    width: "100%",
    alignItems: "center",
    height: verticalScale(110),
  },
  gradientLabel: {
    color: COLORS.WHITE[100],
    fontSize: scale(80),
    fontWeight: "bold",
  },
  four: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.TWENTY_FIVE,
    top: 30,
  },
  sharpLabel: {
    color: COLORS.GRAY[300],
    fontSize: FONTSIZE.THIRTY,
    marginLeft: scale(10),
  },
  gotIt: {
    fontSize: FONTSIZE.FIFTEEN,
    color: COLORS.GRAY[300],
  },
  gotItView: {
    backgroundColor: COLORS.GRAY[600],
    width: scale(300),
    height: scale(25),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.GRAY[600],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  meterView: {
    marginTop: verticalScale(20),
    borderWidth: 4,
    width: scale(300),
    alignSelf: "center",
    borderColor: COLORS.GRAY[600],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: verticalScale(25),
  },
  meter: {
    resizeMode: "contain",
  },
  secondContainer: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: COLORS.GRAY[600],
    width: scale(300),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: scale(10),
  },
  touchableView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  tunningView: {
    justifyContent: "center",
    width: scale(130),
    borderRadius: 8,
    height: verticalScale(30),
    alignItems: "center",
  },
  tunning: {
    fontSize: FONTSIZE.ELEVEN,
  },
  toneView: {
    width: scale(130),
    height: verticalScale(30),
    backgroundColor: COLORS.BLACK[600],
  },
  tone: {
    color: COLORS.GRAY[300],
    fontSize: FONTSIZE.TWELVE,
  },
  toneImgView: {
    marginTop: verticalScale(20),
    borderWidth: 4,
    width: scale(300),
    alignSelf: "center",
    borderColor: COLORS.GRAY[600],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: verticalScale(25),
  },
  toneImg: {
    resizeMode: "contain",
  },

  //Meter style
  meterContainer: {
    width: "85%",
    height: 270,
    marginBottom: scale(40),
    alignSelf: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: scale(3),
    marginTop: scale(20),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  meterSubContainer: {
    // backgroundColor: "red",
    borderColor: COLORS.GRAY[200],
    borderWidth: 2,
    width: 230,
    height: 230,
    borderRadius: 230 / 2,
    justifyContent: "center",
  },
  indicator: {},
  origin: {
    position: "absolute",
    alignSelf: "center",
    top: "45%",
    width: 30,
    height: 30,
    borderRadius: 45 / 2,
  },
  scale: {
    position: "absolute",
    left: 0,
    right: 0,
    width: 1,
    height: 400,
    borderTopWidth: 10,
    borderTopColor: "#37474f",
    marginLeft: 4.5,
  },
  strong: {
    width: 2,
    borderTopWidth: 20,
  },
  demo: {
    position: "absolute",
    width: "50%",
    height: 3,
    backgroundColor: "silver",
  },
});
