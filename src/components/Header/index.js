import {TouchableOpacity, View} from "react-native";
import React from "react";
import {Icon} from "react-native-elements";
import {COLORS} from "../../constants/color";
import {useNavigation} from "@react-navigation/native";
import { styles } from "./style";

const Header = ({viewStyle,onPress}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[styles.container,viewStyle]}>
      <TouchableOpacity
        onPress={() => onPress()}>
        <Icon
          name="arrow-back-ios"
          type="materialicons"
          size={35}
          color={COLORS.GRAY[400]}
        />
      </TouchableOpacity>
    
      
    </View>
  );
};

export default Header;

