import {View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import {checkData} from "../../utils";
import MCheckbox from "../../components/Checkbox";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import {scale} from "react-native-size-matters";
import {styles} from "./style";

const KnowInstrument = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <MImage src={IMAGES.LOGO} imageStyle={styles.logo} />
        <MText
          label={STRING.KNOW_INSTRUMENT.YOUR_INSTRUMENT}
          labelStyle={styles.title}
        />
        <MCheckbox checkData={checkData} checkView={{marginTop: scale(20)}} />
      </View>
    </SafeAreaView>
  );
};

export default KnowInstrument;