import {View} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import MDropDown from "../../components/DropDown";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import MButton from "../../components/Button";
import {styles} from "./style";
import MGradient from "../../components/Gradient";

let types = [
  {
    id: 1,
    name: "Account Type",
  },
  {
    id: 2,
    name: "Data Not available",
  },
  {
    id: 3,
    name: "Data Not available",
  },
];

const Membership = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selected, setSelected] = useState(undefined);

  const onSelect = item => {
    setSelectedItem(item);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <MImage src={IMAGES.LOGO} />
        <MDropDown data={types} value={selectedItem} onSelect={onSelect} />
        <MText
          label={STRING.MEMBERSHIP.SUBSCRIPTION}
          viewStyle={styles.memebershipView}
        />
        <MText
          label={STRING.MEMBERSHIP.PAYMENT}
          viewStyle={styles.paymentView}
        />
        {/* <MButton
          label={STRING.MEMBERSHIP.SUBSCRIBE}
          viewStyle={styles.btnView}
          handleButton={()=>{
            alert(STRING.COMMON.PRODUCTION)
          }}
        /> */}
        <MGradient
          handleButton={() => {
            alert(STRING.COMMON.PRODUCTION);
          }}
          linearButton={true}
          linearView={styles.btnView}
          lLabel={STRING.MEMBERSHIP.SUBSCRIBE}
          lBtnView={{
            height: 40,
            justifyContent: "center",
          }}
          linearLabel={{
            alignSelf: "center",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Membership;
