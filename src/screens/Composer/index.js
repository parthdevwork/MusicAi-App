import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList} from "react-native";

let list = [
  {
    id: 1,
    name: "Composer",
  },
  {
    id: 2,
    name: "Genres",
  },
  {
    id: 3,
    name: "Cloud",
  },
];

const Composer = () => {
  return (
    <SafeAreaView styles={styles.safeContainer}>
      <FlatList data={list} />
    </SafeAreaView>
  );
};
export default Composer;
