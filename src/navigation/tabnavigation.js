import {StyleSheet} from "react-native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Tabbar from "./Tabbar/tabbar";
import {IMAGES} from "../constants/image";
import {NAVKEY} from "../constants/navkey";
import {COLORS} from "../constants/color";
import {verticalScale} from "react-native-size-matters";
import MImage from "../components/Image";
import {FONTSIZE} from "../constants/font";

import Home from "../screens/Home/index";
import Tuner from "../screens/Tuner";
import Metronome from "../screens/Metronome";
import Profile from "../screens/Profile";

import Library from "../screens/Library";
import SightRead from "../screens/SightRead";
import AddMusic from "../screens/AddMusic";
import Composer from "../screens/Composer";
import ComposerLibrary from "../screens/ComposerLibrary";
import Perform from "../screens/Perform";
import Record from "../screens/Record";
import Recording from "../screens/Recording";
import Account from "../screens/Account";
import Membership from "../screens/Membership";
import KnowAbout from "../screens/KnowAbout";
import SoloLibrary from "../screens/SoloLibrary";
import KnowInstrument from "../screens/KnowInstrument";
import GenresLibrary from "../screens/GenresLibrary";
import Perform2 from "../screens/Perform2";
import Cloud from "../screens/Cloud";
import CloudScan from "../screens/CloudScan";
import CloudImports from "../screens/CloudImports";
import CloudExcerpt from "../screens/CloudExcerpt";
import Compare from "../screens/Compare";
import Practice from "../screens/Practice";
import PreviousExpert from "../screens/PreviousExpert";
import TodayExpert from "../screens/TodayExpert";
import Scan from "../screens/Scan";
import Import from "../screens/Import";
import TuneSettings from "../screens/TuneSettings";
import MetronomeSetting from "../screens/MetronomeSetting";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NAVKEY.HOME}
        component={Home}
        options={{
          tabBarIcon: () => (
            <MImage
              src={IMAGES.HOME_ACT}
              imageStyle={{resizeMode: "contain", width: verticalScale(35)}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Tabnav = () => {
  return (
    <Tab.Navigator
      initialRouteName={NAVKEY.HOME_NAV}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          width: "100%",
          backgroundColor: COLORS.BLACK[600],
          bottom: 0,
          width: "100%",
          height: verticalScale(70),
        },
        tabBarLabelStyle: {fontSize: FONTSIZE.TEN, color: COLORS.WHITE[100]},
      }}
      tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen
        name={NAVKEY.HOME_NAV}
        component={HomeStack}
        options={{
          tabBarIcon: () => (
            <MImage
              src={IMAGES.HOME_ACT}
              imageStyle={{resizeMode: "contain", width: verticalScale(35)}}
            />
          ),
        }}
      />

      <Tab.Screen name={NAVKEY.LIBRARY} component={Library} />
      <Tab.Screen name={NAVKEY.SIGHT_READ} component={SightRead} />
      <Tab.Screen name={NAVKEY.ADDMUSIC} component={AddMusic} />
      <Tab.Screen name={NAVKEY.ACCOUNT} component={Account} />
      <Tab.Screen name={NAVKEY.MEMBERSHIP} component={Membership} />
      <Tab.Screen name={NAVKEY.KNOW_ABOUT} component={KnowAbout} />
      <Tab.Screen name={NAVKEY.SOLOLIBRARY} component={SoloLibrary} />
      <Tab.Screen name={NAVKEY.KNOW_INSTRUMENT} component={KnowInstrument} />
      <Tab.Screen name={NAVKEY.COMPOSER_LIB} component={ComposerLibrary} />
      <Tab.Screen name={NAVKEY.GENRES_LIB} component={GenresLibrary} />
      <Tab.Screen name={NAVKEY.PERFORM} component={Perform} />
      <Tab.Screen name={NAVKEY.PERFORM2} component={Perform2} />
      <Tab.Screen name={NAVKEY.CLOUD} component={Cloud} />
      <Tab.Screen name={NAVKEY.CLOUD_SCAN} component={CloudScan} />
      <Tab.Screen name={NAVKEY.CLOUD_IMPORTS} component={CloudImports} />
      <Tab.Screen name={NAVKEY.CLOUD_EXCERPT} component={CloudExcerpt} />
      <Tab.Screen name={NAVKEY.COMPARE} component={Compare} />
      <Tab.Screen name={NAVKEY.PRACTICE} component={Practice} />
      <Tab.Screen name={NAVKEY.RECORD} component={Record} />
      <Tab.Screen name={NAVKEY.RECORDING} component={Recording} />
      <Tab.Screen name={NAVKEY.PREV_EXPRET} component={PreviousExpert} />
      <Tab.Screen name={NAVKEY.TODAY_EXPRET} component={TodayExpert} />
      <Tab.Screen name={NAVKEY.SCAN} component={Scan} />
      <Tab.Screen name={NAVKEY.IMPORT} component={Import} />
      <Tab.Screen name={NAVKEY.TUNE_SETTINGS} component={TuneSettings} />
      <Tab.Screen
        name={NAVKEY.METRONOME_SETTINGS}
        component={MetronomeSetting}
      />
      <Tab.Screen name={NAVKEY.TUNER} component={Tuner} />
      <Tab.Screen name={NAVKEY.METRONOME} component={Metronome} />
      <Tab.Screen name={NAVKEY.PROFILE} component={Profile} />

    </Tab.Navigator>
  );
};

export default Tabnav;

const styles = StyleSheet.create({});
