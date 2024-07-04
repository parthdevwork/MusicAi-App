import { View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MImage from "../../components/Image";
import { IMAGES } from "../../constants/image";
import { COLORS } from "../../constants/color";
import MTextInput from "../../components/TextInput";
import { STRING } from "../../constants/string";
import { scale } from "react-native-size-matters";
import MDropDown from "../../components/DropDown";
import MButton from "../../components/Button";
import { styles } from "./style";

let data = [
  {
    id: 1,
    name: "instrument",
  },
  {
    id: 2,
    name: "No data available",
  },
  {
    id: 3,
    name: "No data available",
  },
];

const Account = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selected, setSelected] = useState(undefined);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const onSelect = item => {
    setSelectedItem(item);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <MImage src={IMAGES.LOGO} />
        <MTextInput
          value={name}
          onChangeText={setname}
          placeholder={STRING.ACCOUNT.NAME}
          parentContainer={styles.textParent}
          placeholderTextColor={COLORS.WHITE[100]}
        />
        <MTextInput
          value={email}
          onChangeText={setemail}
          placeholder={STRING.ACCOUNT.EMAILL}
          parentContainer={[styles.textParent, { marginVertical: scale(20) }]}
          placeholderTextColor={COLORS.WHITE[100]}
        />
        <MDropDown
          showOption={true}
          data={data}
          value={selectedItem}
          onSelect={onSelect}
        />

        <MButton
          label={STRING.ACCOUNT.SET_ACC}
          viewStyle={styles.btnView}
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Account;