import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import Header from "../../components/Header";
import MText from "../../components/Text";
import { COLORS } from "../../constants/color";
import {STRING} from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { cloudExcerpt } from "../../utils";

const CloudExcerpt = () => {
  const renderItems = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          alert(STRING.COMMON.PRODUCTION);
        }}
        style={styles.renderView}>
        <MText label={item?.item?.name} />

        <MText label={item?.item?.date} viewStyle={{marginLeft: 10}} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header />
      <View>
        <MText
          label={"Cloud Excerpt"}
          labelStyle={{color: "white"}}
          viewStyle={{width: "100%", marginTop: 20, left: 20}}
        />
        <FlatList
          data={cloudExcerpt}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default CloudExcerpt;
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  renderView: {
    flexDirection: "row",
    backgroundColor: COLORS.GRAY[200],
    margin: scale(10),
    height: scale(70),
    paddingHorizontal: scale(20),
    alignItems: "center",
    // marginHorizontal:scale(21)
  },
});