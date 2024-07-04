import {View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import MButton from "../../components/Button";
import { styles } from "./style";

const KnowAbout = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <MImage src={IMAGES.LOGO} />
        <MText
          label={STRING.KNOW_ABOUT.KNOW_ABOUT}
          viewStyle={styles.aboutView}
          labelStyle={styles.aboutLabel}
        />

        <MButton
          label={STRING.KNOW_ABOUT.APP_STORE}
          viewStyle={styles.storeView}
          lableView={styles.storeLabelView}
          labelStyle={styles.googleLabel}
          handleButton={()=>{
            alert(STRING.COMMON.PRODUCTION)
          }}
        />

        <MButton
          label={STRING.KNOW_ABOUT.GOOGLE}
          viewStyle={styles.btnViewStyle}
          lableView={styles.googleLabelView}
          labelStyle={styles.googleLabel}
          handleButton={()=>{
            alert(STRING.COMMON.PRODUCTION)
          }}
        />
        <MButton
          label={STRING.KNOW_ABOUT.FACEBOOK}
          viewStyle={styles.storeView}
          lableView={styles.fbLabelView}
          labelStyle={styles.googleLabel}
          handleButton={()=>{
            alert(STRING.COMMON.PRODUCTION)
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default KnowAbout;