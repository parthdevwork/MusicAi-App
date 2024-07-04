import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  scrollContainer: {
    backgroundColor: COLORS.BLACK[200],
  },
  topText: {
    color: COLORS.GRAY[300],
    fontSize: FONTSIZE.TWELVE,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: COLORS.BLACK[200],
    marginTop:scale(0),
    margin: scale(25),
  },
  title: {
    fontWeight: "bold",
    // marginTop: scale(20),
  },
  renderView: {
    backgroundColor: COLORS.GRAY[600],
    marginTop: scale(10),
    width: scale(93),
    height: scale(130),
    paddingHorizontal: scale(5),
    borderRadius: 6,
    margin: 5,
    right: 5,
  },
  imgView: {
    width: "90%",
    height: scale(80),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  titale: {
    fontSize: FONTSIZE.EIGHT,
    color: COLORS.GRAY[700],
    
  },
  titleLabel: {
    fontSize: FONTSIZE.EIGHT,
    fontWeight: "bold",
  },
  viewAllLinear: {
    marginTop: scale(10),
    alignSelf: "flex-start",
    width: scale(65),
    height: scale(25),
    borderRadius: 6,
  },
  viewAllView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewAll: {
    fontWeight: "bold",
    fontSize: FONTSIZE.EIGHT,
  },
  todayGradientView: {
    marginTop: scale(20),
    width: "100%",
    height: scale(130),
    borderRadius: 6,
    padding: scale(15),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notesView: {
    backgroundColor: COLORS.WHITE[100],
    width: scale(120),
    height: scale(100),
    borderRadius: 6,
  },
  playView: {
    marginTop: scale(10),
    backgroundColor: COLORS.BLUE[100],
    width: scale(80),
    height: scale(25),
  },
  play: {
    fontSize: FONTSIZE.TEN,
    color: COLORS.WHITE[100],
  },
});
