import { View, SafeAreaView } from "react-native";
import React from "react";
import MImage from "../../components/Image";
import { IMAGES } from "../../constants/image";
import MText from "../../components/Text";
import { STRING } from "../../constants/string";
import MButton from "../../components/Button";
import { styles } from "./style";

const Compare = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <MText
        label={STRING.COMPARE.TITLE}
        viewStyle={styles.titleView}
        labelStyle={styles.titleLabel}
      />
      <MImage
        src={IMAGES.NOTE}
        imageStyle={{ marginVertical: 15, width: "200%" }}
        viewStyle={styles.imgView}
      />
      <View style={styles.btnContainer}>
        <MButton
          label={STRING.COMPARE.INT}
          viewStyle={styles.btnView}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
        />
        <MButton
          label={STRING.COMPARE.DYNAMIC}
          viewStyle={styles.btnView}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
        />
      </View>
      <View style={styles.subBtnContainer}>
        <MButton
          label={STRING.COMPARE.TEMP}
          viewStyle={styles.btnView}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
        />
        <MButton
          label={STRING.COMPARE.PRACTICE}
          viewStyle={styles.btnView}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Compare;