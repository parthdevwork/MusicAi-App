// import { FlatList,  TouchableOpacity,  View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import Header from '../../components/Header'
// import MText from '../../components/Text'
// import { library } from '../../utils'
// import { styles } from './style'
// import { STRING } from '../../constants/string'
// import { useNavigation } from '@react-navigation/native'
// import { NAVKEY } from '../../constants/navkey'
// import Tabbarstatic from '../../navigation/Tabbar/tabbarstatic'
// import MImage from '../../components/Image'

// const Library = () => {

// const navigation=useNavigation()

//   const checkId = item => {
//     if (item?.index === 0) {
//       navigation.navigate(NAVKEY.COMPOSER_LIB);
//     }
//     if (item?.index === 1) {
//       navigation.navigate(NAVKEY.GENRES_LIB);
//     }
//     // if (item?.index === 2) {
//     //   navigation.navigate(NAVKEY.CLOUD);
//     // }
//   };

//   const renderItems = item => {
//     return (
//       <View style={[styles.renderView]}>
//         <TouchableOpacity
//           style={styles.renderView}
//           onPress={() => {
//             checkId(item);
//           }}>
//           <MImage src={item?.item?.image} imageStyle={styles.imageView} />
//           <MText
//             label={item?.item?.name}
//             labelStyle={styles.labels}
//             viewStyle={[styles.labelView]}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
//      <SafeAreaView style={styles.safeContainer}>
//       <Header />
//       <View style={styles.container}>
//         <MText
//           label={STRING.LIBRARY.TITLE}
//           labelStyle={styles.title}
//         />
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           data={library}
//           renderItem={renderItems}
//           keyExtractor={item => item.id}
//         />
//       </View>

//       <Tabbarstatic />
//     </SafeAreaView>
//   )
// }

// export default Library
import { FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import MText from "../../components/Text";
import { library } from "../../utils";
import { styles } from "./style";
import { STRING } from "../../constants/string";
import { useNavigation } from "@react-navigation/native";
import { NAVKEY } from "../../constants/navkey";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import MImage from "../../components/Image";
import { listMusic } from "../../store/action/user";
import { useDispatch } from "react-redux";
const Library = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const displayMusic = async () => {
    await listMusic(dispatch);
    // setListMusicData(musicList);
  };
  const checkId = (item) => {
    displayMusic();
    if (item?.index === 0) {
      navigation.navigate(NAVKEY.COMPOSER_LIB);
    }
    if (item?.index === 1) {
      navigation.navigate(NAVKEY.GENRES_LIB);
    }
    if (item?.index === 2) {
      navigation.navigate(NAVKEY.CLOUD);
    }
  };

  const renderItems = (item) => {
    return (
      <View style={[styles.renderView]}>
        <TouchableOpacity
          style={styles.renderView}
          onPress={() => {
            checkId(item);
          }}
        >
          <MImage src={item?.item?.image} imageStyle={styles.imageView} />
          <MText
            label={item?.item?.name}
            labelStyle={styles.labels}
            viewStyle={[styles.labelView]}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const onPress = () => {
    navigation.navigate(NAVKEY.HOME);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={{ flexDirection: "row" }}>
        <Header onPress={onPress} />
        <MText label={STRING.LIBRARY.TITLE} labelStyle={styles.title}  viewStyle={styles.lablebox} />
      </View>

      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={library}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default Library;
