import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import MGradient from "../../components/Gradient";
import Header from "../../components/Header";
import MImage from "../../components/Image";
import MSearchbar from "../../components/Search";
import MText from "../../components/Text";
import { COLORS } from "../../constants/color";
import { FONTSIZE } from "../../constants/font";
import { NAVKEY } from "../../constants/navkey";
import { STRING } from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { listMusic } from "../../store/action/user";
import { ComposerLibraryy, Genres } from "../../utils";
import { styles } from "./style";

const GenresLibrary = () => {
  const navigation = useNavigation();
  const [currentindex, setcurrentindex] = useState(0);
  const scrollref = useRef(null);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const [item, setItem] = useState("");
  const [flag, setFlag] = useState(false);
  const [SearchText, setSearchText] = useState("");
  const [CateGories, setCateGories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const musicDetails = useSelector(
    (state) => state?.user?.musicdetails?.musics
  );
  const IsFocused = useIsFocused();

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
      setSearchText(text);
    } else {
      handleGenres(selectedCategory);
      setSearchText(text);
    }
  };
  useEffect(() => {
    const uniqueTags = ["All"];
    musicDetails?.map((categories) => {
      if (
        uniqueTags.indexOf(categories.music_type) === -1 &&
        categories.music_type !== "null" &&
        categories.music_type !== null
      ) {
        uniqueTags.push(categories.music_type);
      }
    });
    setCateGories(uniqueTags);
  }, [filteredDataSource]);

  const handleGenres = (text) => {
    let filterdata = musicDetails
      ?.filter((item) => item.music_type == text)
      .map(
        ({
          artist_name,
          banner_image,
          created_at,
          id,
          import_type,
          music_type,
          music_url,
          other_details,
          sheet_url,
          title,
          updated_at,
          user_id,
        }) => ({
          artist_name,
          banner_image,
          created_at,
          id,
          import_type,
          music_type,
          music_url,
          other_details,
          sheet_url,
          title,
          updated_at,
          user_id,
        })
      );
    if (text === "All") {
      setFilteredDataSource(musicDetails);
    } else {
      setFilteredDataSource(filterdata);
    }
    const gen = Genres.map((item, i) => {
      const genItem = item?.name;
      return genItem;
    });

    if (gen === text) {
      setItem(gen);
      setFlag(true);
    }
  };

  const getData = (data) => {
    const lessonName = data?.item?.lessonName;
    navigation.navigate(NAVKEY.PERFORM, {
      type: STRING.GENRESLIBRARY.TITLE,
      data,
    });
  };

  const renderItem = (data) => {
    return (
      <TouchableOpacity
        style={styles.linear}
        onPress={() => {
          getData(data);
        }}
      >
        <MImage
          src={{ uri: data?.item?.banner_image }}
          imageStyle={styles.imgStyle}
        />

        <View
          style={{
            flexDirection: "column",
            left: 5,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <MText label={"Lesson:"} labelStyle={styles.titleText} />

            <MText
              numberOfLines={1}
              label={data?.item?.title}
              labelStyle={styles.subTitle}
            />
            <View
              style={{ position: "absolute", top: 20, flexDirection: "row" }}
            >
              <MText label={"Artist:"} labelStyle={styles.titleText} />
              <MText
                label={data?.item?.artist_name}
                labelStyle={styles.subTitle}
              />
            </View>
            <View
              style={{ position: "absolute", top: 40, flexDirection: "row" }}
            >
              <MText labelStyle={styles.titleText} label={"Genres:"} />
              <MText
                labelStyle={styles.subTitle}
                label={data?.item?.music_type}
              />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center" }}>
          <MText
            labelStyle={{
              color: COLORS.WHITE[100],
              fontSize: FONTSIZE.TEN,
            }}
            label={"17/08/2022"}
          />

          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: COLORS.BLACK[100],
              marginTop: 5,
              alignSelf: "center",
            }}
          >
            <Icon
              name="play-arrow"
              size={25}
              color={COLORS.WHITE[100]}
              type="material"
              style={{
                top: 10,
                height: 30,
                width: 50,
                justifyContent: "center",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const onPress = () => {
    navigation.navigate(NAVKEY.LIBRARY);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={{ flexDirection: "row" }}>
        <Header onPress={onPress} />
        <MText
          label={STRING.GENRESLIBRARY.TITLE}
          labelStyle={styles.titlelabel}
          viewStyle={styles.lablebox}
        />
      </View>

      <View style={styles.container}>
        <MSearchbar
          placeholder="search"
          onChangeText={(text) => {
            searchFilterFunction(text);
          }}
          value={SearchText}
          iconname="search"
          iconcolor={COLORS.GRAY[300]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                if (currentindex > 0) {
                  setcurrentindex(currentindex - 30);
                }
              }}
            >
              <Icon
                name="chevron-left"
                size={25}
                color={COLORS.WHITE[100]}
                type="material"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              padding: 0,
              width: "90%",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {CateGories.map((item) => {
              return (
                <MGradient
                  linearView={{
                    height: 30,
                    width: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 16,
                    backgroundColor: COLORS.GRAY[500],
                    marginVertical: 4,
                    marginHorizontal: 5,
                  }}
                  linearButton
                  handleButton={() => {
                    handleGenres(item);
                    setSelectedCategory(item);
                  }}
                  lLabel={item}
                  lBtnView={{
                    flex: 1,
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                  }}
                  linearLabel={{
                    color: COLORS.WHITE[100],
                    fontSize: FONTSIZE.ELEVEN,
                  }}
                />
              );
            })}
          </View>

          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                if (currentindex > 0) {
                  setcurrentindex(currentindex + 30);
                }
              }}
            >
              <Icon
                name="chevron-right"
                size={25}
                color={COLORS.WHITE[100]}
                type="material"
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredDataSource}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flat}
        />
      </View>
      <Tabbarstatic />
    </SafeAreaView>
  );
};

export default GenresLibrary;
