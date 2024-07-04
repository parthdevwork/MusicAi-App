import {TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {scale} from "react-native-size-matters";
import {Icon} from "react-native-elements";
import MText from "../Text";
import { MCheckboxStyle } from "./style";

const MCheckbox = ({checkData, checkView}) => {
  const [check, setCheck] = useState(false);
  const [number, setNumber] = useState(0);

  const [frequently, setFerequently] = useState(false);
  const [recently, setResently] = useState(false);
  const [often, setOften] = useState(false);

  const checkFunc = ({i, item}) => {
    if (i !== item?.id) {
      if (i === 0) {
        setFerequently(!frequently);
        setNumber(0);
      }
      if (i === 1) {
        setResently(!recently);
        setNumber(1);
      }
      if (i === 2) {
        setOften(!often);
        setNumber(2);
      }
    }
  };
  return (
    <View style={[MCheckboxStyle.container, checkView]}>
      {checkData.map((item, i) => {
        return (
          <>
            <View style={{flexDirection: "row", height: scale(60)}}>
              <TouchableOpacity key={i} onPress={() => checkFunc({item, i})}>
                <View style={MCheckboxStyle.touchable}>
                  {i === number ? (
                    <Icon
                      name="check"
                      type="material"
                      size={25}
                      color="#FFFFFF"
                    />
                  ) : null}
                </View>
              </TouchableOpacity>

              <MText
                label={item?.data}
                viewStyle={{
                  marginLeft: scale(30),
                }}
              />
            </View>
          </>
        );
      })}
    </View>
  );
};

export default MCheckbox;

