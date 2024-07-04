import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import MText from "../../components/Text";
import { COLORS } from "../../constants/color";
import { NAVKEY } from "../../constants/navkey";
import { STRING } from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { styles } from "./style";


let library = [
  {
    id: 1,
    name: STRING.CLOUD.SCAN,
  },
  {
    id: 2,
    name: STRING.CLOUD.IMPORT,
  },
  {
    id: 3,
    name: STRING.CLOUD.EXCERPT,
  },
];

const Cloud = () => {
  const navigation = useNavigation();

  const checkId = item => {
    if (item?.index === 0) {
      // alert(STRING.COMMON.PRODUCTION);
      navigation.navigate(NAVKEY.CLOUD_SCAN);
    }
    if (item?.index === 1) {
      // alert(STRING.COMMON.PRODUCTION);
      navigation.navigate(NAVKEY.CLOUD_IMPORTS);
    }
    if (item?.index === 2) {
      // alert(STRING.COMMON.PRODUCTION);
      navigation.navigate(NAVKEY.CLOUD_EXCERPT);
    }
  };

  const renderItems = item => {
    return (
      <View style={[styles.renderView]}>
        <TouchableOpacity
          style={styles.renderView}
          onPress={() => {
            checkId(item);
          }}>
          <MText
            label={item?.item?.name}
            labelStyle={{color: COLORS.WHITE[100], fontWeight: "bold"}}
            viewStyle={[styles.labelView]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={library}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
      </View>

      <Tabbarstatic />
    </SafeAreaView>
  );
};
export default Cloud;
