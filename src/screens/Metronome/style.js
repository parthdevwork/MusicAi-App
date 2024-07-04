import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/color";
import {moderateScale, scale, verticalScale} from "react-native-size-matters";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[600],
  },
  linearSetting: {
    width: scale(80),
    height: scale(40),
    justifyContent: "flex-end",
    borderRadius: 6,
    marginTop: scale(20),
  },
  touchableSetting: {
    flex: 1,
    borderRadius: 6,
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: FONTSIZE.THIRTEEN,
    fontWeight: "bold",
  },
  titleView: {
    marginVertical: verticalScale(30),
    alignSelf: "center",

    width: scale(191),
  },
  container: {
    width: "90%",
    backgroundColor: COLORS.BLACK[600],
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: COLORS.GRAY[600],
    borderWidth: 3,
    paddingVertical: verticalScale(25),
    alignSelf: "center",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  linearCircle: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(25) / 2,
  },
  circleView: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(25) / 2,
    backgroundColor: COLORS.GRAY[500],
    borderColor: COLORS.WHITE[100],
    borderWidth: 0.5,
  },
  pendulumView: {
    backgroundColor: COLORS.GRAY[600],
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    height: verticalScale(30),
    justifyContent: "center",
    borderColor: COLORS.GRAY[600],
    borderWidth: 3,
  },
  pendulum: {
    color: COLORS.GRAY[200],
    fontSize: FONTSIZE.TEN,
  },
  parentLine: {
    backgroundColor: COLORS.GRAY[600],
    width: "90%",
    alignSelf: "center",
    height: scale(50),
    justifyContent: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  activeImg: {
    width: scale(35),
    height: scale(15),
    resizeMode: "cover",
  },
  activeView: {
    width: "90%",
    alignSelf: "center",
    height: scale(15),
    backgroundColor: COLORS.BLACK[100],
    alignItems: "center",
    justifyContent: "center",
  },
  midContainer: {
    flexDirection: "row",
    marginTop: moderateScale(20),
    borderColor: COLORS.GRAY[600],
    borderWidth: 3,
    width: "90%",
    alignSelf: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: verticalScale(30),
    justifyContent: "space-evenly",
  },
  minusView: {
    backgroundColor: COLORS.BLACK[600],
    width: moderateScale(50),
    height: scale(50),
  },
  minus: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.FOURTY,
  },
  crotchetView: {
    alignSelf: "center",
    alignItems: "center",
    height: moderateScale(30),
  },
  crotchet: {
    color: COLORS.GRAY[700],
    fontSize: FONTSIZE.TWENTY,
  },
  numberView: {},
  number: {
    fontSize: scale(45),
  },
  bpmView: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"red",
    // height:10
  },
  bpm: {
    color: COLORS.GRAY[700],
    fontSize: FONTSIZE.TWELVE,
  },
  plusView: {
    backgroundColor: COLORS.BLACK[600],
    width: moderateScale(50),
    height: scale(50),
  },
  plus: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.FOURTY,
  },
  bottomContainer: {
    alignSelf: "center",
    width: "90%",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.GRAY[600],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  adagio: {
    color: COLORS.GRAY[700],
    fontSize: FONTSIZE.TWELVE,
  },
  tap: {
    color: COLORS.GRAY[700],
    fontSize: FONTSIZE.TWELVE,
  },
  playView: {
    alignSelf: "center",
    bottom: 50,
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    borderColor: COLORS.BLACK[100],
    borderWidth: 2,
  },
  playIcon: {
    width: scale(50),
    alignSelf: "center",
    bottom: 115,
  },
});
