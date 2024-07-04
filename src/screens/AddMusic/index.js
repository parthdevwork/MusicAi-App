import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MText from "../../components/Text";
import { STRING } from "../../constants/string";
import { FONTSIZE } from "../../constants/font";
import { COLORS } from "../../constants/color";
import MGradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import { NAVKEY } from "../../constants/navkey";
import MImage from "../../components/Image";
import { IMAGES } from "../../constants/image";
import Header from "../../components/Header";
import ImagePicker from "react-native-image-crop-picker";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listMusic } from "../../store/action/user";
import { scale } from "react-native-size-matters";

const AddMusic = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.user?.userid);

  const [listMusicData, setListMusicData] = useState([]);

  useEffect(() => {
    displayMusic();
  }, []);

  const displayMusic = async () => {
    const musicList = await dispatch(listMusic());
    // console.log("musicList::", musicList);
    setListMusicData(musicList);
    // console.log("Hi user ::",detailRes?.data?.result?.data?.users?.profile_pic?.url);
  };

  const scanDocuments = async () => {
    // {
    //   Platform.OS === "android"
    //     ?
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      navigation.navigate(NAVKEY.SCAN, {
        params: image?.path,
        type: "image",
      });
    });
    // : ImagePicker.openPicker({
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //   }).then(image => {
    //     console.log("Image path:", image?.path);
    //     convertPdf(image);
    //   });
    // }
  };

  // const convertPdf = async image => {
  //   try {
  //     const options = {
  //       imagePaths: [image?.path],
  //       name: "PDF",
  //     };
  //     const pdf = await RNImageToPdf.createPDFbyImages(options);
  //     console.log("PDF::", pdf?.filePath);
  //     navigation.navigate(NAVKEY.SCAN, {
  //       params: pdf?.filePath,
  //       type: "pdf",
  //       img: image?.path,
  //     });
  //   } catch (error) {
  //     console.log("PDF conversion error:", error);
  //   }
  // };

  // const importDocuments = useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: "fullScreen",
  //       type: [DocumentPicker.types.audio],
  //     });

  //     {
  //       response.map((docDetails, i) => {
  //         setDocName(docDetails?.name);
  //         setDocType(docDetails?.type);
  //         setMusicFile(docDetails);
  //       });
  //     }
  //     let music_file = musicFileData?.uri;
  //     console.log("music file", music_file);
  //     console.log("musicFileData ", musicFileData);

  //     let banner_image =
  //       "/Users/imac/Library/Developer/CoreSimulator/Devices/CEEC6708-EEA7-412A-9A70-1DE9BF7DDFE2/data/Containers/Data/Application/0C5A808A-AA52-4AC2-A9F8-92AB819A72D1/tmp/react-native-image-crop-picker/8A4EEBFC-C02C-4667-A49A-0DA3E68914E4.jpg";

  //     let import_type = docType.split("/")[0];
  //     navigation.navigate(NAVKEY.IMPORT, {
  //       params: music_file,
  //       type: import_type,
  //       img: banner_image,
  //     });

  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // }, []);

  const renderItem = (data) => {
    console.log("data::", data);
    return (
      <View
        style={{
          backgroundColor: COLORS.BLACK[600],
          padding: 7,
          marginHorizontal: 5,
          borderRadius: 5,
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <Image
            style={{ height: 110, width: 100, borderRadius: 5 }}
            source={data.item.image}
          />
        </View>
        <View style={{ width: 100, overflow: "hidden", height: 60 }}>
          <View style={{ top: 10, flexDirection: "row" }}>
            <Text style={{ color: COLORS.GRAY[500], fontSize: FONTSIZE.TEN }}>
              {STRING.ADDMUSIC.TITLENAME} :{" "}
            </Text>
            {/* <Text
              numberOfLines={1}
              style={{
                color: COLORS.GRAY[400],
                fontSize: FONTSIZE.TEN,
                fontWeight: "bold",
              }}>
              {data?.item?.title}
            </Text> */}
          </View>
          <View style={{ top: 10, flexDirection: "row" }}>
            <Text style={{ color: COLORS.GRAY[500], fontSize: FONTSIZE.TEN }}>
              {STRING.ADDMUSIC.ARTIST} :{" "}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: COLORS.GRAY[400],
                fontSize: FONTSIZE.TEN,
                fontWeight: "bold",
              }}
            >
              {data?.item?.artist_name}
            </Text>
          </View>
          <View style={{ top: 10, flexDirection: "row" }}>
            <Text style={{ color: COLORS.GRAY[500], fontSize: FONTSIZE.TEN }}>
              {STRING.ADDMUSIC.GENRES} :{" "}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: COLORS.GRAY[400],
                fontSize: FONTSIZE.TEN,
                fontWeight: "bold",
              }}
            >
              {data?.item?.music_type}
            </Text>
          </View>
        </View>
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
        <MText
          label={STRING.ADDMUSIC.TITLE}
          labelStyle={styles.title}
          viewStyle={styles.lablebox}
        />
      </View>
      <View style={styles.container}>
        <MGradient linearView={styles.linear}>
          {/* <View
            style={{
              backgroundColor: COLORS.WHITE[100],
              padding: 10,
              width: 100,
              height:80,
              alignSelf: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}>
            <Icon
              name="qr-code-scanner"
              size={50}
              color="#A25A89"
              type="material"
            />
          </View> */}
          <MImage
            pressable
            imagePress={() => {
              // navigation.navigate(NAVKEY.SCAN);
              scanDocuments();
            }}
            src={IMAGES.SCAN_NOW}
            viewStyle={{
              backgroundColor: "white",
              width: 100,
              height: 80,
              borderRadius: 8,
            }}
            imageStyle={{ width: "100%", height: 50 }}
          />
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate(NAVKEY.SCAN);
              scanDocuments();
            }}
            style={{
              backgroundColor: "#250550",
              borderRadius: 10,
              marginLeft: 30,
              height: 30,
              justifyContent: "center",
              width: 120,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                textAlign: "center",
                opacity: 0.7,
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              scan now
            </Text>
          </TouchableOpacity>
        </MGradient>

        <MGradient linearView={[styles.linear, { marginTop: 20 }]}>
          {/* <View
            style={{
              backgroundColor: COLORS.WHITE[100],
              padding: 10,
              // width: 120,
              width: 100,
              height: 80,
              alignSelf: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}>
            <Icon
              name="description"
              size={50}
              color="#A25A89"
              type="material"
            />
          </View> */}

          <MImage
            pressable
            imagePress={() => {
              // importDocuments();
              navigation.navigate(NAVKEY.IMPORT);
              // alert("under production"); `
            }}
            src={IMAGES.IMPORT_NOW}
            viewStyle={{
              backgroundColor: "white",
              width: 100,
              height: 80,
              borderRadius: 8,
            }}
            imageStyle={{ width: "100%", height: 50 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#250550",
              borderRadius: 10,
              marginLeft: 30,
              height: 30,
              justifyContent: "center",
              width: 120,
            }}
            onPress={() => {
              // importDocuments();
              // navigation.navigate(NAVKEY.IMPORT);
              alert("under production");
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                textAlign: "center",
                opacity: 0.7,
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Import Now
            </Text>
          </TouchableOpacity>
        </MGradient>

        <MText label={STRING.ADDMUSIC.RECENTS} labelStyle={styles.titlelabel} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity>
              {/* <Icon
                name="chevron-left"
                size={35}
                color={COLORS.WHITE[100]}
                type="material"
              /> */}
            </TouchableOpacity>
          </View>

          <View>
            {/* <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              // data={Resent}
              data={listMusicData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={{width: 300}}
            /> */}

            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: COLORS.BLACK[600],
                    padding: 7,
                    marginHorizontal: 5,
                    borderRadius: 5,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 110,
                      alignSelf: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.GRAY[100],
                      justifyContent: "center",
                      borderRadius: 6,
                    }}
                    onPress={() => {
                      // scanDocuments();
                      alert(STRING.COMMON.PRODUCTION);
                    }}
                  >
                    <MText
                      label={"+"}
                      labelStyle={{
                        // color: COLORS.BLACK[600],
                        fontSize: FONTSIZE.TWENTY_FIVE,
                        color: COLORS.GRAY[300],
                      }}
                    />
                    <MText
                      label={STRING.ADDMUSIC.NEW}
                      labelStyle={{
                        fontSize: FONTSIZE.TEN,
                        color: COLORS.GRAY[300],
                      }}
                    />
                  </TouchableOpacity>

                  <MText
                    label={"Title:"}
                    labelStyle={{
                      fontSize: FONTSIZE.TEN,
                      color: COLORS.GRAY[500],
                    }}
                    viewStyle={{ marginTop: scale(5) }}
                  />
                  <MText
                    label={"Artist:"}
                    labelStyle={{
                      fontSize: FONTSIZE.TEN,
                      color: COLORS.GRAY[500],
                    }}
                    // viewStyle={{marginTop:scale(5)}}
                  />
                  <MText
                    label={"Genres:"}
                    labelStyle={{
                      fontSize: FONTSIZE.TEN,
                      color: COLORS.GRAY[500],
                    }}
                    // viewStyle={{marginTop:scale(5)}}
                  />
                </View>
                {listMusicData.map((item, i) => {
                  // console.log("item,", item);
                  return (
                    <View
                      style={{
                        backgroundColor: COLORS.BLACK[600],
                        padding: 7,
                        marginHorizontal: 5,
                        borderRadius: 5,
                      }}
                    >
                      <View style={{ alignSelf: "center" }}>
                        <Image
                          style={{ height: 110, width: 100, borderRadius: 5 }}
                          // source={item?.item?.image}
                          source={{ uri: item?.banner_image } | IMAGES.MOZART}
                        />
                      </View>
                      <View
                        style={{ width: 100, overflow: "hidden", height: 60 }}
                      >
                        <View style={{ top: 10, flexDirection: "row" }}>
                          <Text
                            style={{
                              color: COLORS.GRAY[500],
                              fontSize: FONTSIZE.TEN,
                            }}
                          >
                            {STRING.ADDMUSIC.TITLENAME} :{" "}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={{
                              color: COLORS.GRAY[400],
                              fontSize: FONTSIZE.TEN,
                              fontWeight: "bold",
                            }}
                          >
                            {item?.title}
                          </Text>
                        </View>
                        <View style={{ top: 10, flexDirection: "row" }}>
                          <Text
                            style={{
                              color: COLORS.GRAY[500],
                              fontSize: FONTSIZE.TEN,
                            }}
                          >
                            {STRING.ADDMUSIC.ARTIST} :{" "}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={{
                              color: COLORS.GRAY[400],
                              fontSize: FONTSIZE.TEN,
                              fontWeight: "bold",
                            }}
                          >
                            {item?.artist_name}
                          </Text>
                        </View>
                        <View style={{ top: 10, flexDirection: "row" }}>
                          <Text
                            style={{
                              color: COLORS.GRAY[500],
                              fontSize: FONTSIZE.TEN,
                            }}
                          >
                            {STRING.ADDMUSIC.GENRES} :{" "}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={{
                              color: COLORS.GRAY[400],
                              fontSize: FONTSIZE.TEN,
                              fontWeight: "bold",
                            }}
                          >
                            {item?.music_type}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>

          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity>
              {/* <Icon
                name="chevron-right"
                size={35}
                color={COLORS.WHITE[100]}
                type="material"
              /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  lablebox: {
    // marginTop:5,
    alignSelf: "center",
    height: scale(35),
    justifyContent: "center",
    // backgroundColor: "red",
  },
  title: {
    fontWeight: "bold",
    // left: 5,
  },
  titlelabel: {
    fontSize: FONTSIZE.FIFTEEN,
    marginTop: 15,
    color: "#ffffff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  linear: {
    padding: 5,
    borderRadius: 5,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: COLORS.GRAY[200],
  },
  subTitle: {
    color: COLORS.WHITE[100],
  },
});

export default AddMusic;
