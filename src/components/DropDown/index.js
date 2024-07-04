// import React from "react";
// import {TouchableOpacity, Image, View} from "react-native";
// import {IMAGES} from "../../constants/image";
// import MText from "../Text";
// import MDropDownStyle from "./style";

// const MDropDown = ({
//   label,
//   labelStyle,
//   viewStyle,
//   rightImageStyle,
//   handleButton,
//   subContainer,
// }) => {
//   return (
//     <View style={[MDropDownStyle.dropDownContainer, viewStyle]}>
//       <View style={[MDropDownStyle.subContainer, subContainer]}>
//         <MText
//           label={label}
//           labelStyle={[MDropDownStyle.labelContainer, labelStyle]}
//         />
//         <TouchableOpacity onPress={() => handleButton()}>
//           <Image
//             source={IMAGES.DROPDOWN}
//             style={[MDropDownStyle.rightImage, rightImageStyle]}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default MDropDown;

import React, {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import {scale, verticalScale} from "react-native-size-matters";
import {COLORS} from "../../constants/color";
import {FONTSIZE} from "../../constants/font";
import MText from "../Text";
import {MDropDownStyle} from "./style";

const MDropDown = ({
  data,
  value,
  onSelect,
  containerView,
  touchableView,
  optionStyle,
  type,
}) => {
  const [showOption, setShowOption] = useState(false);
  const onSelectedItem = val => {
    setShowOption(false);
    onSelect(val, type);
  };
  return (
    <View styles={[MDropDownStyle.container, containerView]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[MDropDownStyle.dropdownStyle, touchableView]}
        onPress={() => setShowOption(!showOption)}>
        <MText
          label={!!value ? value?.name : "Choose an option"}
          labelStyle={{
            fontSize: FONTSIZE.THIRTEEN,
            color: COLORS.WHITE[300],
            left: scale(10),
          }}
        />
        <Icon
          name="arrow-drop-down"
          type="material"
          size={25}
          color={COLORS.WHITE[300]}
          style={{
            transform: [
              {
                rotate: showOption ? "180deg" : "0deg",
              },
            ],
          }}
        />
      </TouchableOpacity>

      {showOption && (
        <View style={[MDropDownStyle.optionView, optionStyle]}>
          {data.map((val, i) => {
            const index = data.length - 1;
            return (
              <TouchableOpacity
                style={{
                  // backgroundColor: "red",
                  // alignItems:"center",
                  justifyContent:"flex-start",
                  height: scale(35),
                  borderBottomColor: i < index ? COLORS.BLACK[200] : null,
                  borderBottomWidth: i < index ? scale(1) : null,
                }}
                key={String(i)}
                onPress={() => onSelectedItem(val)}>
                <MText
                  label={val.name}
                  viewStyle={{backgroundColor: ""}}
                  labelStyle={{
                    fontSize: FONTSIZE.THIRTEEN,
                    color: COLORS.WHITE[300],
                    padding: verticalScale(5),
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default MDropDown;
