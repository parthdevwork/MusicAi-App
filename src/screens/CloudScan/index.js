import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import MText from "../../components/Text";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { cloudScan } from "../../utils";
import { styles } from "./style";

const CloudScan = () => {
  const renderItems = (item) => {
    return (
      <MText
        label={item?.item?.file}
        viewStyle={styles.fileView}
        labelStyle={styles.fileLabel}
      />
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header/>
      <View>
        <MText
          label={"Cloud Scan"}
          labelStyle={{ color: "white" }}
          viewStyle={{ width: "100%", marginTop: 20, left: 20 }}
        />
        <FlatList
          data={cloudScan}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default CloudScan;