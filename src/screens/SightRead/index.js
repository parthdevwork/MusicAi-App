import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import MText from "../../components/Text";
import { IMAGES } from "../../constants/image";
import { STRING } from "../../constants/string";
import { COLORS } from "../../constants/color";
import { scale } from "react-native-size-matters";
import MImage from "../../components/Image";
import MGradient from "../../components/Gradient";
import MButton from "../../components/Button";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import { useNavigation } from "@react-navigation/native";
import { NAVKEY } from "../../constants/navkey";
import { styles } from "./style";
import Header from "../../components/Header/index";

let prevExpert = [
  {
    id: 1,
    image: IMAGES.MOZART,
    titale: "Titale:",
    title: "Wolfgang Amadeus",
    artist: "Artist:",
    name: "Mozart",
    genres: "Genres:",
    type: "Classical",
  },
  {
    id: 2,
    image: IMAGES.MOZART,
    titale: "Titale:",
    title: "Wolfgang Amadeus",
    artist: "Artist:",
    name: "Mozart",
    genres: "Genres:",
    type: "Classical",
  },
  {
    id: 3,
    image: IMAGES.MOZART,
    titale: "Titale:",
    title: "Wolfgang Amadeus",
    artist: "Artist:",
    name: "Mozart",
    genres: "Genres:",
    type: "Classical",
  },
];
let todayExpert = [
  {
    id: 1,
    image: IMAGES.MOZART,
    titale: "Titale:",
    title: "Wolfgang Amadeus",
    artist: "Artist:",
    name: "Mozart",
    genres: "Genres:",
    type: "Classical",
  },
  {
    id: 2,
    image: IMAGES.MOZART,
    titale: "Titale:",
    title: "Wolfgang Amadeus",
    artist: "Artist:",
    name: "Mozart",
    genres: "Genres:",
    type: "Classical",
  },
  {
    id: 3,
    image: IMAGES.MOZART,
    titale: "Titale:",
    title: "Wolfgang Amadeus",
    artist: "Artist:",
    name: "Mozart",
    genres: "Genres:",
    type: "Classical",
  },
];

const SightRead = () => {
  const navigation = useNavigation();
  const renderItems = (item) => {
    return (
      <View style={styles.renderView}>
        <MImage src={item?.item?.image} viewStyle={styles.imgView} />
        <View
          style={{ flexWrap: "wrap", width: scale(70), overflow: "hidden" }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
            }}
          >
            <MText label={item?.item?.titale} labelStyle={styles.titale} />
            <MText
              numberOfLines={1}
              label={item?.item?.title}
              labelStyle={styles.titleLabel}
              // viewStyle={{ width: scale(60) }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <MText label={item?.item?.artist} labelStyle={styles.titale} />
            <MText label={item?.item?.name} labelStyle={styles.titleLabel} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 3 }}>
            <MText label={item?.item?.genres} labelStyle={styles.titale} />
            <MText label={item?.item?.type} labelStyle={styles.titleLabel} />
          </View>
        </View>
      </View>
    );
  };

  const renderExperts = (item) => {
    return (
      <View style={[styles.renderView]}>
        <MImage src={item?.item?.image} viewStyle={styles.imgView} />
        <View
          style={{ flexWrap: "wrap", width: scale(70), overflow: "hidden" }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
            }}
          >
            <MText label={item?.item?.titale} labelStyle={styles.titale} />
            <MText
              numberOfLines={1}
              label={item?.item?.title}
              labelStyle={styles.titleLabel}
              // viewStyle={{ width: scale(60) }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <MText label={item?.item?.artist} labelStyle={styles.titale} />
            <MText label={item?.item?.name} labelStyle={styles.titleLabel} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 3 }}>
            <MText label={item?.item?.genres} labelStyle={styles.titale} />
            <MText label={item?.item?.type} labelStyle={styles.titleLabel} />
          </View>
        </View>
      </View>
    );
  };
  const onPress = () => {
    navigation.navigate(NAVKEY.HOME);
  };
  return (
    <>
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          <View style={{ flexDirection: "row" }}>
            <Header viewStyle={{ }} onPress={onPress} />
            <View style={{ flexDirection: "column" }}>
            <MText
              label={STRING.SIGHT_READ.HEADER}
              labelStyle={styles.topText}
            />
            <MText
              label={STRING.SIGHT_READ.SUB_TITLE}
              labelStyle={styles.title}
            />
            </View>
          </View>

          <View style={styles.container}>
            <MGradient
              linearButton={true}
              lBtnView={{
                width: "112%",
                height: scale(130),
                position: "absolute",
              }}
              linearView={styles.todayGradientView}
              handleButton={() => {
                navigation.navigate(NAVKEY.TODAY_EXPRET, {
                  type: STRING.SIGHT_READ.SUB_TITLE,
                  lessonName: "In sonata from xyz",
                });
              }}
            >
              <MImage src={IMAGES.TODAY_NOTE} viewStyle={styles.notesView} />
              <View
                style={{
                  height: scale(80),
                  width: scale(120),
                  alignSelf: "center",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <MText
                    label={"Titale:"}
                    labelStyle={[styles.titale, { color: COLORS.PINK[100] }]}
                  />
                  <MText
                    numberOfLines={1}
                    label={"In sonata from xyz"}
                    labelStyle={[styles.titleLabel]}
                    viewStyle={{ width: scale(70) }}
                  />
                </View>

                <View style={{ flexDirection: "row", marginTop: scale(5) }}>
                  <MText
                    label={"Artist:"}
                    labelStyle={[styles.titale, { color: COLORS.PINK[100] }]}
                  />
                  <MText
                    numberOfLines={1}
                    label={"Joseph Haydn"}
                    labelStyle={[styles.titleLabel]}
                    viewStyle={{ width: scale(70) }}
                  />
                </View>

                <View style={{ flexDirection: "row", marginTop: scale(5) }}>
                  <MText
                    label={"Genres:"}
                    labelStyle={[styles.titale, { color: COLORS.PINK[100] }]}
                  />
                  <MText
                    numberOfLines={1}
                    label={"Classical"}
                    labelStyle={[styles.titleLabel]}
                    viewStyle={{ width: scale(70) }}
                  />
                </View>
                <MButton
                  label={STRING.SIGHT_READ.PLAY}
                  viewStyle={styles.playView}
                  labelStyle={styles.play}
                  handleButton={() => {
                    navigation.navigate(NAVKEY.TODAY_EXPRET);
                  }}
                />
              </View>
            </MGradient>
            <FlatList
              horizontal={true}
              data={prevExpert}
              keyExtractor={(item) => item.id}
              renderItem={renderItems}
            />
            <MGradient
              linearButton={true}
              lLabel={STRING.SIGHT_READ.VIEW}
              linearView={styles.viewAllLinear}
              lBtnView={styles.viewAllView}
              linearLabel={styles.viewAll}
              handleButton={() => {
                navigation.navigate(NAVKEY.PREV_EXPRET);
              }}
            />

            <MText
              label={STRING.SIGHT_READ.TITLE}
              labelStyle={[styles.title, { marginTop: 30 }]}
            />
            <FlatList
              horizontal={true}
              data={todayExpert}
              keyExtractor={(item) => item.id}
              renderItem={renderExperts}
            />
            <MGradient
              linearButton={true}
              lLabel={STRING.SIGHT_READ.VIEW}
              linearView={styles.viewAllLinear}
              lBtnView={styles.viewAllView}
              linearLabel={styles.viewAll}
              handleButton={() => {
                navigation.navigate(NAVKEY.TODAY_EXPRET);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Tabbarstatic />
    </>
  );
};
export default SightRead;
