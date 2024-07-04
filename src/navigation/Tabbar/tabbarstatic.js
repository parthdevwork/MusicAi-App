import {TouchableOpacity, View} from "react-native";
import React from "react";
import MImage from "../../components/Image";
import {COLORS} from "../../constants/color";
import {scale} from "react-native-size-matters";
import {useNavigation} from "@react-navigation/native";
import {tabbar} from "../../utils";
import {TabStyle} from "./style";
import MText from "../../components/Text";
import {FONTSIZE} from "../../constants/font";

const Tabbarstatic = ({state, descriptor}) => {
  const navigation = useNavigation();
  return (
    <View style={[TabStyle.tabContainer]}>
      <View style={TabStyle.subContainer}>
        {tabbar.map((tabs, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                navigation.navigate(tabs.nav), console.log("pressed-->", tabs);
              }}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "25%",
                height: "100%",
              }}>
              <MImage
                NAVKEY={i}
                pressable={true}
                src={tabs.src}
                imageStyle={{
                  resizeMode: "contain",
                  width: scale(25),
                  height: scale(35),
                }}
              />
              <MText
                label={tabs?.name}
                viewStyle={{
                  alignItems: "center",
                  marginTop: -10,
                }}
                labelStyle={{
                  color: COLORS.GRAY[300],
                  fontSize: FONTSIZE.TWELVE,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Tabbarstatic;
