import {useNavigation} from "@react-navigation/native";
import {View, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import MGradient from "../../components/Gradient";
import Header from "../../components/Header";
import MImage from "../../components/Image";
import MText from "../../components/Text";
import {COLORS} from "../../constants/color";
import {IMAGES} from "../../constants/image";
import { NAVKEY } from "../../constants/navkey";
import {STRING} from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import {styles} from "./style";

const Perform = props => {
  let lessonName = props?.route?.params?.data?.item?.lessonName;

  let type = props?.route?.params?.type;

  const navigation = useNavigation();
  const onPress =()=>{
    console.log("type==>",type);
    if(type == "Genres Library"){

      navigation.navigate(NAVKEY.GENRES_LIB);
    }else{
      navigation.navigate(NAVKEY.COMPOSER_LIB);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
     <View style={{ flexDirection: "row"}}>
        <Header onPress={onPress} />
        <MText label={type} labelStyle={styles.textHeader} viewStyle={styles.lablebox} />
      </View>
      <View style={{flex: 1, backgroundColor: COLORS.BLACK[200]}}>
       
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
          <MImage
            pressable
            src={IMAGES.NEXT}
            touchStyle={{
              width: 50,
              height: 50,
              justifyContent: "center",
              transform: [{rotate: "180deg"}],
            }}
            imagePress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />

          <MImage
            pressable
            src={IMAGES.PLAY_BUTTON}
            touchStyle={{width: 100, height: 50, justifyContent: "center"}}
            imagePress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />

          <MImage
            pressable
            src={IMAGES.NEXT}
            touchStyle={{width: 50, height: 50, justifyContent: "center"}}
            imagePress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
        </View>

        <MGradient
          linearView={styles.practisBtnStyle}
          lLabel={type === undefined ? "PRACTICE" : "PERFORM"}
          linearLabel={styles.practisText}
          linearButton
          lBtnView={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          handleButton={() => {
            navigation.navigate(NAVKEY.RECORD, {
              lessonName: lessonName,
              type: type,
            });
          }}
        />
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default Perform;
