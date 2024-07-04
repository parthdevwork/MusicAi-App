// import {FlatList, TouchableOpacity, View} from "react-native";
// import React, {useEffect, useState} from "react";
// import {useNavigation} from "@react-navigation/native";
// import {ComposerLibraryy} from "../../utils";
// import MGradient from "../../components/Gradient";
// import MImage from "../../components/Image";
// import MText from "../../components/Text";
// import {SafeAreaView} from "react-native-safe-area-context";
// import Header from "../../components/Header";
// import MSearchbar from "../../components/Search";
// import {COLORS} from "../../constants/color";
// import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
// import {IMAGES} from "../../constants/image";
// import {styles} from "./style";
// import {STRING} from "../../constants/string";
// import {NAVKEY} from "../../constants/navkey";
// import {listMusic} from "../../store/action/user";
// import {useDispatch} from "react-redux";
// import {Image} from "react-native";
// import {scale} from "react-native-size-matters";

// const ComposerLibrary = () => {
//   const [listMusicData, setListMusicData] = useState();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     displayMusic();
//   }, []);

//   const displayMusic = async () => {
//     const musicList = await dispatch(listMusic());

//     setListMusicData(musicList);
//   };
//   // console.log("listMusic:", listMusicData);
//   const navigation = useNavigation();

//   const [search, setsearch] = useState("");

//   const [filteredDataSource, setFilteredDataSource] = useState(listMusicData);

//   const searchFilterFunction = text => {
//     if (text) {
//       const newData = listMusicData.filter(function (item) {
//         const itemData = item.lessonName
//           ? item.lessonName.toUpperCase()
//           : "".toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setsearch(text);
//     } else {
//       setFilteredDataSource(listMusicData);
//       setsearch(text);
//     }
//   };

//   // const getIndex = data => {
//   //   navigation.navigate(NAVKEY.TODAY_EXPRET, {
//   //     type: STRING.COMPOSERLIBRARY.TITLE,
//   //     data,
//   //   });
//   // };
//   const getIndex = data => {
//     navigation.navigate(NAVKEY.PERFORM, {
//       type: STRING.COMPOSERLIBRARY.TITLE,
//       data,
//     });
//   };
//   const renderItem = data => {
//     // console.log("data:::", data);
//     return (
//       <TouchableOpacity style={{marginTop: 20}} onPress={() => getIndex(data)}>
//         <MGradient linearView={styles.linear}>
//           {data?.item?.banner_image !== null ? (
//             <Image
//               source={{uri: data?.item?.banner_image}}
//               style={styles.imgStyle}
//             />
//           ) : (
//             <MImage src={IMAGES.MOZART} imageStyle={styles.imgStyle} />
//           )}

//           <View style={styles.renderView}>
//             <View
//               style={{
//                 flexDirection: "row",
//               }}>
//               <MText labelStyle={styles.titleText} label={"Lesson:"} />
//               <MText
//                 labelStyle={[styles.subTitle, {width: scale(100)}]}
//                 numberOfLines={1}
//                 label={data?.item?.title}
//               />

//               <View
//                 style={{position: "absolute", top: 20, flexDirection: "row"}}>
//                 <MText labelStyle={styles.titleText} label={"Artist:"} />
//                 <MText
//                   numberOfLines={1}
//                   viewStyle={{width: 150}}
//                   labelStyle={styles.subTitle}
//                   label={data?.item?.artist_name}
//                 />
//               </View>
//               <View
//                 style={{position: "absolute", top: 40, flexDirection: "row"}}>
//                 <MText
//                   labelStyle={styles.titleText}
//                   label={"Genres:"}
//                 />
//                 <MText
//                   numberOfLines={1}
//                   viewStyle={{width: 100}}
//                   labelStyle={styles.subTitle}
//                   label={data?.item?.music_type}
//                 />
//               </View>
//             </View>
//           </View>
//           <View style={{alignItems: "center"}}>
//             {/* <MText labelStyle={styles.date} label={data?.item?.created_at} /> */}
//             <MText labelStyle={styles.date} label={"17/08/2022"} />

//             <MImage src={IMAGES.COMPOSER_PLAY} imageStyle={styles.playView} />
//           </View>
//         </MGradient>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeContainer}>
//       <Header />
//       <View style={styles.container}>
//         <MText
//           label={STRING.COMPOSERLIBRARY.TITLE}
//           labelStyle={styles.titlelabel}
//         />

//         <MSearchbar
//           placeholder="search"
//           onChangeText={text => searchFilterFunction(text)}
//           value={search}
//           iconname="search"
//           iconcolor={COLORS.GRAY[300]}
//         />

//         <FlatList
//           showsVerticalScrollIndicator={false}
//           data={filteredDataSource}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           style={{height: "75%"}}
//         />
//       </View>
//       <Tabbarstatic />
//     </SafeAreaView>
//   );
// };

// export default ComposerLibrary;
import { FlatList, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ComposerLibraryy } from "../../utils";
import MGradient from "../../components/Gradient";
import MImage from "../../components/Image";
import MText from "../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import MSearchbar from "../../components/Search";
import { COLORS } from "../../constants/color";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { IMAGES } from "../../constants/image";
import { styles } from "./style";
import { STRING } from "../../constants/string";
import { NAVKEY } from "../../constants/navkey";
import { listMusic } from "../../store/action/user";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-native";
import { scale } from "react-native-size-matters";
import { useIsFocused } from "@react-navigation/native";

const ComposerLibrary = () => {
  const [listMusicData, setListMusicData] = useState();
  const IsFocused = useIsFocused();

  const dispatch = useDispatch();
  const musicDetails = useSelector(
    (state) => state?.user?.musicdetails?.musics
  );
  console.log("musicDetails====>", musicDetails);

  useEffect(() => {
    setFilteredDataSource(musicDetails);
    if (IsFocused) {
      setFilteredDataSource(musicDetails);
    }
  }, [musicDetails]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = filteredDataSource.filter(function (item) {
        const itemData = item?.title
          ? item?.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setsearch(text);
    } else {
      setFilteredDataSource(musicDetails);
      setsearch(text);
    }
  };
  const navigation = useNavigation();

  const [search, setsearch] = useState("");

  const [filteredDataSource, setFilteredDataSource] = useState(listMusicData);

  const onPress = () => {
    navigation.navigate(NAVKEY.LIBRARY);
  };



  const getIndex = (data) => {
    navigation.navigate(NAVKEY.RECORD, {
      type: STRING.COMPOSERLIBRARY.TITLE,
      data,
    });
  };
  const renderItem = (data) => {
    return (
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => getIndex(data)}
      >
        <MGradient linearView={styles.linear}>
          {data?.item?.banner_image !== null ? (
            <Image
              source={{ uri: data?.item?.banner_image }}
              style={styles.imgStyle}
            />
          ) : (
            <MImage src={IMAGES.MOZART} imageStyle={styles.imgStyle} />
          )}

          <View style={styles.renderView}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MText labelStyle={styles.titleText} label={"Lesson:"} />
              <MText
                labelStyle={[styles.subTitle, { width: scale(100) }]}
                numberOfLines={1}
                label={data?.item?.title}
              />

              <View
                style={{ position: "absolute", top: 20, flexDirection: "row" }}
              >
                <MText labelStyle={styles.titleText} label={"Artist:"} />
                <MText
                  numberOfLines={1}
                  viewStyle={{ width: 150 }}
                  labelStyle={styles.subTitle}
                  label={data?.item?.artist_name}
                />
              </View>
              <View
                style={{ position: "absolute", top: 40, flexDirection: "row" }}
              >
                <MText labelStyle={styles.titleText} label={"Genres:"} />
                <MText
                  numberOfLines={1}
                  viewStyle={{ width: 100 }}
                  labelStyle={styles.subTitle}
                  label={data?.item?.music_type}
                />
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            {/* <MText labelStyle={styles.date} label={data?.item?.created_at} />  */}
            <MText labelStyle={styles.date} label={"17/08/2022"} />

            <MImage src={IMAGES.COMPOSER_PLAY} imageStyle={styles.playView} />
          </View>
        </MGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={{ flexDirection: "row" }}>
        <Header onPress={onPress} />
        <MText
          label={STRING.COMPOSERLIBRARY.TITLE}
          labelStyle={styles.titlelabel}
          viewStyle={styles.lablebox}
        />
      </View>
      <View style={styles.container}>
        <MSearchbar
          placeholder="search"
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          iconname="search"
          iconcolor={COLORS.GRAY[300]}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredDataSource}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ height: "75%" }}
        />
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default ComposerLibrary;
