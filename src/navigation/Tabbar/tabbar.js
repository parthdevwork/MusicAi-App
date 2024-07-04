import {Platform, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import MImage from "../../components/Image";
import {COLORS} from "../../constants/color";
import {scale} from "react-native-size-matters";
import {tabbar} from "../../utils";
import {TabStyle} from "./style";
import MText from "../../components/Text";
import {IMAGES} from "../../constants/image";
import {FONTSIZE} from "../../constants/font";

const Tabbar = ({state, descriptor, navigation}) => {
  const [index, setIndex] = useState(0);
  const getIndex = (i, tabs) => {
    console.log("iiiii==>", i);
    if (i === 1 && Platform.OS==="ios") {
      alert("under production");
    } else {
      navigation.navigate(tabs.nav);
      setIndex(i);
    }
  };
  return (
    <View style={TabStyle.tabContainer}>
      <View style={TabStyle.subContainer}>
        {tabbar.map((tabs, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={{
                alignItems: "center",
                width: "25%",
              }}
              onPress={() => getIndex(i, tabs)}>
              {index == i ? (
                <MImage
                  src={IMAGES.ACTIVE}
                  viewStyle={{width: "100%", height: "5%"}}
                />
              ) : null}

              <MImage
                NAVKEY={i}
                pressable={false}
                src={index !== i ? tabs.src : tabs?.active}
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
                  color: index == i ? COLORS.WHITE[100] : COLORS.GRAY[300],
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

export default Tabbar;
