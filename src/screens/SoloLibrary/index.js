import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, {useState, useRef, useCallback} from "react";
import MText from "../../components/Text";
import MSearchbar from "../../components/Search";
import {STRING} from "../../constants/string";
import {FONTSIZE} from "../../constants/font";
import {COLORS} from "../../constants/color";
import {ComposerLibrary as mydata} from "../../utils";
import {Icon} from "react-native-elements";
import MImage from "../../components/Image";

const SoloLibrary = () => {
  const [search, setsearch] = useState("");

  const [filteredDataSource, setFilteredDataSource] = useState(mydata);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    console.log("*******", text);
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = mydata.filter(function (item) {
        // Applying filter for the inserted text in search bar
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
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(mydata);
      setsearch(text);
    }
  };

  const renderItem = data => {
    return (
      <View style={styles.linear}>
        <MImage src={data.item.image} imageStyle={styles.imgStyle} />

        <View
          style={{
            flexDirection: "column",
            width: "45%",

            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: "row",
            }}>
            <Text style={styles.titleText}>{data?.item?.lesson}</Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {data?.item?.lessonName}
            </Text>

            <View style={{position: "absolute", top: 20, flexDirection: "row"}}>
              <Text style={styles.titleText}>{data?.item?.artist}</Text>
              <Text style={styles.subTitle}>{data?.item?.artistName}</Text>
            </View>
            <View style={{position: "absolute", top: 40, flexDirection: "row"}}>
              <Text style={styles.titleText}>{data?.item?.geners}</Text>
              <Text style={styles.subTitle}>{data?.item?.type}</Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: "center"}}>
          <Text
            style={{
              color: COLORS.WHITE[100],
              fontSize: FONTSIZE.TEN,
            }}>
            {data?.item?.date}
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: COLORS.BLACK[100],
              marginTop: 5,
              alignSelf: "center",
            }}>
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
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <MText
          label={STRING.SOLOLIBRARY.TITLE}
          labelStyle={styles.titlelabel}
        />
        <MSearchbar
          placeholder="search"
          onChangeText={searchFilterFunction}
          value={search}
          iconname="search"
          iconcolor={COLORS.GRAY[300]}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredDataSource}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flat}
        />
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
  },
  titlelabel: {
    fontSize: FONTSIZE.THIRTY,
    marginTop: 20,
    color: "#ffffff",
  },
  Genresflat: {
    width: 270,
  },
  flat: {
    width: "100%",
    height: 600,
    marginTop: 30,
    borderRadius: 5,
  },
  linear: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    justifyContent: "space-around",
    backgroundColor: COLORS.BLACK[200],
  },
  imgStyle: {height: 80, width: 100, borderRadius: 8},

  titleText: {
    color: COLORS.GRAY[200],
  },
  subTitle: {
    color: COLORS.WHITE[100],
    width: "70%",
  },
});

export default SoloLibrary;
