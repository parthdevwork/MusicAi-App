import React from "react";
import MImageBack from "../../components/ImageBackground";
import {IMAGES} from "../../constants/image";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import MImage from "../../components/Image";
import MButton from "../../components/Button";
import {styles} from "./style";
import {useNavigation} from "@react-navigation/native";
import {NAVKEY} from "../../constants/navkey";

const Start = () => {
  const navigation = useNavigation();

  return (
    <MImageBack src={IMAGES.BG}>
      <MImage src={IMAGES.LOGO} viewStyle={styles.logoView} />
      <MText
        label={STRING.START.LEARN}
        viewStyle={styles.learnView}
        labelStyle={styles.learn}
      />
      <MButton
        label={STRING.START.STARTED}
        viewStyle={styles.buttonView}
        labelStyle={styles.button}
        handleButton={() => {
          navigation.navigate(NAVKEY.LOGIN);
        }}
      />
    </MImageBack>
  );
};
export default Start;
