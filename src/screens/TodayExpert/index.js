import {useNavigation} from "@react-navigation/native";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {scale} from "react-native-size-matters";
import MGradient from "../../components/Gradient";
import MText from "../../components/Text";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";
import { NAVKEY } from "../../constants/navkey";
import {STRING} from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";

const TodayExpert = props => {
  console.log("Props::", props.route.params);
  console.log("Prooops=>", props?.route?.params?.type);
  console.log("tada=>", props?.route?.params?.data?.item?.lessonName);
  let lessonName =
    props?.route?.params?.data?.item?.lessonName ||
    props?.route?.params?.lessonName;
  let type = props?.route?.params?.type;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: COLORS.BLACK[200]}}>
        {/* <Text style={styles.textHeader}>Today's Excerpt</Text> */}
        <MText label={type} labelStyle={styles.textHeader} />
        <MText
          numberOfLines={1}
          label={lessonName}
          labelStyle={styles.textsub}
        />
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/images/Perform.png")}
        />

        <Image
          style={styles.sliderIMG}
          source={require("../../../assets/images/seekbar.png")}
        />
        <View style={styles.musicHendel}>
          <TouchableOpacity
            onPress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}>
            <Image
              style={styles.leftArrow}
              source={require("../../../assets/images/ArrowBackWord.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}>
            <Image
              style={styles.play}
              source={require("../../../assets/images/play.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.leftArrow}
              source={require("../../../assets/images/ArrowForword.png")}></Image>
          </TouchableOpacity>
        </View>

        <MGradient
          linearView={styles.practisBtnStyle}
          // lLabel={type === undefined ? "PRACTICE" : "PERFORM"}
          lLabel={"PRACTICE"}
          linearLabel={styles.practisText}
          linearButton
          handleButton={()=>{
            navigation.navigate(NAVKEY.RECORD)
          }}
          lBtnView={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
          {/* <Text style={styles.practisText}> PRACTICE</Text>
           */}
        </MGradient>
        {/* </TouchableOpacity> */}
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.BLACK[200],
    // backgroundColor: "black",
  },
  textHeader: {
    fontSize: FONTSIZE.SIXTEEN,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
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
    backgroundColor: "red",
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
  },
  play: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default TodayExpert;
