import {FlatList, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {perform2} from "../../utils/index";
import MText from "../../components/Text";
import MButton from "../../components/Button";
import {STRING} from "../../constants/string";
import {styles} from "./style";

const Perform2 = () => {
  const renderItem = item => {
    return (
      <View style={styles.renderView}>
        <MText
          label={item?.item?.name}
          labelStyle={styles.contentLabel}
          viewStyle={styles.contentView}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>
        <FlatList
          data={perform2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <MButton
        label={STRING.PERFORM2.RECORD}
        viewStyle={styles.btnView}
        handleButton={() => {
          alert(STRING.COMMON.PRODUCTION);
        }}
      />
    </SafeAreaView>
  );
};

export default Perform2;
