import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import {IMAGES} from "../../constants/image";
import {Tabbarstatic} from "../../navigation/Tabbar/tabbarstatic";
import {COLORS} from "../../constants/color";

const Practice = () => {
  const INTButton = (data, extraStyle) => {
    return (
      <View style={[styles.IntView, extraStyle]}>
        <TouchableOpacity style={styles.IntButton}>
          <Text style={{color: "rgb(42,52,63)", fontSize: 18}}>{data}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.contain}>
      <SafeAreaView style={styles.contain}>
        <View style={styles.contain}>
          <View style={styles.contain}>
            <View
              style={{
                backgroundColor: "rgb(239,239,239)",
                marginHorizontal: 20,
                padding: 22,
                marginVertical: 20,
              }}>
              <Text style={{fontSize: 16, color: "rgb(42,52,63)"}}>Take 1</Text>
            </View>
            <View
              style={{
                backgroundColor: "rgb(239,239,239)",
                marginHorizontal: 20,
                padding: 20,
              }}>
              <Image
                source={IMAGES.NOTE}
                style={{width: "100%", marginVertical: 15}}
              />
            </View>
            <View>
              <View style={{marginTop: 50, marginHorizontal: 20}}>
                {INTButton("RECORD", {
                  marginBottom: 25,
                })}
                {INTButton("LISTEN / PLAY SONG")}
              </View>
            </View>
          </View>
          {/* <View style={{ flexDirection: "row" }}>
            {HomeButton("Home")}
            {HomeButton("Tuner")}
            {HomeButton("Metronome")}
            {HomeButton("Profile")}
          </View> */}
        </View>
        <Tabbarstatic />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: COLORS.BLACK[200],
  },
  compareText: {
    fontSize: 20,
    color: "rgb(42,52,63)",
    fontWeight: "600",
    textAlign: "center",
  },
  homeButton: {
    backgroundColor: "rgb(239,239,239)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeView: {
    width: Dimensions.get("screen").width / 4,
    paddingHorizontal: 4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  IntView: {
    marginHorizontal: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  IntButton: {
    backgroundColor: "rgb(239,239,239)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});

export default Practice;