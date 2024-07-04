import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import MGradient from "../../components/Gradient";
import MImage from "../../components/Image";
import MText from "../../components/Text";
import { COLORS } from "../../constants/color";
import { IMAGES } from "../../constants/image";
import { STRING } from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { styles } from "./style";


const Recording = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{left: 10}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="keyboard-backspace"
            type="material"
            size={25}
            color={COLORS.GRAY[200]}
          />
        </TouchableOpacity>
        <MText
          label={STRING.RECORDING.BACK}
          viewStyle={{
            left: 20,
            top: 5,
          }}
          labelStyle={styles.back}
        />
      </View>
      <MText label={STRING.RECORDING.RECORDING} 
      labelStyle={styles.topTitle} />
      <MImage src={IMAGES.RECORDING} viewStyle={styles.imgStyle} />
      <MText
        label={STRING.RECORDING.SCORE}
        labelStyle={[styles.topTitle, {marginTop: scale(20)}]}
      />
      <MImage src={IMAGES.SCORE} imageStyle={styles.scoreView} />
      <View style={styles.bottomView}>
        <MGradient
          linearButton
          linearView={styles.linearBtn}
          lLabel={STRING.RECORDING.REDO}
          lBtnView={styles.touchableView}
          linearLabel={styles.btnLabel}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
        />
        <MGradient
          linearButton
          linearView={styles.linearBtn}
          lLabel={STRING.RECORDING.REVIEW}
          lBtnView={styles.touchableView}
          linearLabel={styles.btnLabel}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
        />
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default Recording;