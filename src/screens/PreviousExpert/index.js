import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import MButton from "../../components/Button";
import MGradient from "../../components/Gradient";
import Header from "../../components/Header";
import MImage from "../../components/Image";
import MSearchbar from "../../components/Search";
import MText from "../../components/Text";
import { COLORS } from "../../constants/color";
import { FONTSIZE } from "../../constants/font";
import { IMAGES } from "../../constants/image";
import { NAVKEY } from "../../constants/navkey";
import { STRING } from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { ComposerLibraryy } from "../../utils";

const PreviousExpert = () => {
  const navigation = useNavigation();
  const [search, setsearch] = useState("");

  const [filteredDataSource, setFilteredDataSource] =
    useState(ComposerLibraryy);
  const searchFilterFunction = (text) => {
    console.log("*******", text);
    if (text) {
      const newData = ComposerLibraryy.filter(function (item) {
        console.log("&&&&&&&&", item.lesson);
        const itemData = item.lessonName
          ? item.lessonName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setsearch(text);
    } else {
      setFilteredDataSource(ComposerLibraryy);
      setsearch(text);
    }
  };

  const getIndex = (data) => {
    // console.log("Data-->", data);
    navigation.navigate(NAVKEY.TODAY_EXPRET);
  };
  const renderItem = (data) => {
    return (
      // <TouchableOpacity  onPress={() => getIndex(data)}>

      <MGradient
        linearButton
        linearView={styles.linear}
        handleButton={() => {
          alert("Hello");
        }}
      >
        <MImage src={data.item.image} imageStyle={styles.imgStyle} />

        <View style={styles.renderView}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.titleText}>{data?.item?.lesson}</Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {data?.item?.lessonName}
            </Text>

            <View
              style={{ position: "absolute", top: 20, flexDirection: "row" }}
            >
              <Text style={styles.titleText}>{data?.item?.artist}</Text>
              <Text style={styles.subTitle}>{data?.item?.artistName}</Text>
            </View>
            <View
              style={{ position: "absolute", top: 40, flexDirection: "row" }}
            >
              <Text style={styles.titleText}>{data?.item?.geners}</Text>
              <Text style={styles.subTitle}>{data?.item?.type}</Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.date}>{data?.item?.date}</Text>
          <View style={styles.playView}>
            <Icon
              name="play-arrow"
              size={25}
              color={COLORS.WHITE[100]}
              type="material"
            />
          </View>
        </View>
      </MGradient>
    );
  };
  const onPress = () => {
    navigation.navigate(NAVKEY.SIGHT_READ);
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: COLORS.BLACK[200] }}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={{ flexDirection: "row" }}>
            <Header onPress={onPress} />
            <MText
              label={STRING.PREV_EXPERT.TITLE}
              viewStyle={styles.lablebox}
              labelStyle={styles.titleLabel}
            />
          </View>
          <View style={styles.container}>
            <MGradient
              linearView={styles.gradientView}
              lBtnView={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              linearButton={true}
              handleButton={() => {
                navigation.navigate(NAVKEY.TODAY_EXPRET);
              }}
            >
              <MImage src={IMAGES.PREV_NOTE} viewStyle={styles.imgView} />
              <View style={{ margin: scale(20) }}>
                <View style={{ flexDirection: "row" }}>
                  <MText
                    label={"Titale:"}
                    labelStyle={{ fontSize: FONTSIZE.NINE, color: "#d176aa" }}
                  />
                  <MText
                    numberOfLines={1}
                    label={"In sonata from xyz"}
                    viewStyle={{ width: scale(80) }}
                    labelStyle={{ fontSize: FONTSIZE.NINE, fontWeight: "bold" }}
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MText
                    label={"Artist:"}
                    labelStyle={{ fontSize: FONTSIZE.NINE, color: "#d176aa" }}
                  />
                  <MText
                    numberOfLines={1}
                    label={"Joseph Haydin"}
                    viewStyle={{ width: scale(90) }}
                    labelStyle={{ fontSize: FONTSIZE.NINE, fontWeight: "bold" }}
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MText
                    label={"Genres:"}
                    labelStyle={{ fontSize: FONTSIZE.NINE, color: "#d176aa" }}
                  />
                  <MText
                    numberOfLines={1}
                    label={"Classical"}
                    viewStyle={{ width: scale(90) }}
                    labelStyle={{ fontSize: FONTSIZE.NINE, fontWeight: "bold" }}
                  />
                </View>
                <MButton
                  label={"PLAY"}
                  viewStyle={{
                    backgroundColor: COLORS.BLUE[100],
                    width: scale(80),
                    marginTop: scale(15),
                  }}
                  labelStyle={{
                    color: COLORS.WHITE[100],
                    fontSize: FONTSIZE.TEN,
                  }}
                  handleButton={() => {
                    navigation.navigate(NAVKEY.TODAY_EXPRET);
                  }}
                />
              </View>
            </MGradient>
            <MText
              label={STRING.PREV_EXPERT.SUBTITLE}
              viewStyle={styles.subTitleView}
              labelStyle={styles.subTitleLabel}
            />
            <MSearchbar
              placeholder="search"
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              iconname="search"
              iconcolor={COLORS.GRAY[300]}
              
            />
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              data={filteredDataSource}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={{ height: "100%", marginTop: scale(20) }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <Tabbarstatic />
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: COLORS.BLACK[200],
    flex: 1,
  },
  container: { marginHorizontal: scale(25),marginTop:5 },
  titleView: {
    marginBottom: scale(20),
    marginLeft: scale(10),
  },
  lablebox: {
    // marginTop:5,
    alignSelf: "center",
    height:scale(35),
    justifyContent:'center',
    // backgroundColor:"red"
  },
  titleLabel: {
    fontWeight: "bold",
    fontSize: FONTSIZE.FIFTEEN,
  },
  gradientView: {
    width: "100%",
    height: scale(120),
    borderRadius: 6,
    flexDirection: "row",
  },
  subTitleView: { marginTop: scale(20), marginLeft: scale(10) },
  subTitleLabel: {
    fontWeight: "700",
  },
  imgView: {
    height: scale(120),
    width: scale(100),
    // borderRadius:8,
    // borderWidth:2,
    // borderColor:"white"
  },
  linear: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    justifyContent: "space-around",
  },
  imgStyle: {
    height: 80,
    width: 100,
    borderRadius: 8,
  },
  renderView: {
    flexDirection: "column",
    width: "45%",
    marginVertical: 10,
  },
  titleText: {
    color: COLORS.GRAY[200],
    fontSize: FONTSIZE.TEN,
  },
  subTitle: {
    color: COLORS.WHITE[100],
    width: "70%",
    fontSize: FONTSIZE.TEN,
    fontWeight: "bold",
  },
  date: {
    color: COLORS.WHITE[100],
    fontSize: FONTSIZE.TEN,
    top: 10,
  },
  playView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: COLORS.BLACK[100],
    top: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PreviousExpert;
