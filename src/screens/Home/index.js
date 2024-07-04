import {
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState} from "react";
import {COLORS} from "../../constants/color";
import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import {options} from "../../utils";
import {styles} from "./style";
import {useNavigation} from "@react-navigation/native";
import {NAVKEY} from "../../constants/navkey";
import {ASYNC_KEY} from "../../constants/asyncKey";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {scale} from "react-native-size-matters";
import {useEffect} from "react";
import {getUserDetails} from "../../store/action/user";

const Home = () => {
  const userId = useSelector(state => state?.user?.userid);
  const userDetails = useSelector(state => state?.user?.userdetails);
  // console.log("details==>", userDetails);
  const dispatch = useDispatch();
  // const first_name = useSelector(state => state?.user?.userdetails?.first_name);
  // const profile_pic = useSelector(
  //   state => state?.user?.userdetails?.profile_pic,
  // );
  const [firstName, setFirstName] = useState(null);
  const [pic, setPic] = useState(null);

  // useEffect(() => {
  //   displayData(userId);
  // }, []);

  const displayData = async userId => {
    const detailRes = await dispatch(getUserDetails(userId));

    setFirstName(detailRes?.data?.result?.data?.users?.first_name);
    setPic(detailRes?.data?.result?.data?.users?.profile_pic?.url);
    console.log("userId:", pic);
  };

  getMyStringValue = async () => {
    try {
      return await AsyncStorage.getItem(ASYNC_KEY.ON);
    } catch (e) {
      console.log("error:", e);
    }
    console.log("Done.");
  };

  const navigation = useNavigation();

  const checkId = item => {
    if (item?.index === 0) {
      navigation.navigate(NAVKEY.LIBRARY);
    }
    if (item?.index === 1) {
      navigation.navigate(NAVKEY.SIGHT_READ);
    }
    if (item?.index === 2) {
      navigation.navigate(NAVKEY.ADDMUSIC);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {userDetails?.profile_pic === null ||
        userDetails?.profile_pic === undefined ? (
          <MImage
            src={IMAGES.PHOTO}
            // src={{uri: profilePic}}
            viewStyle={styles.photoView}
            imageStyle={{resizeMode: "contain"}}
          />
        ) : (
          <Image
            source={{uri: userDetails?.profile_pic?.url}}
            style={{
              width: scale(50),
              height: scale(50),
              borderRadius: scale(50) / 2,
            }}
          />
        )}
        <View style={{flexDirection: "row"}}>
          <MText label={STRING.HOME.HEY} labelStyle={styles.heyLabel} />
          <MText
            label={
              userDetails?.first_name === undefined
                ? "User"
                : userDetails?.first_name
            }
            labelStyle={[styles.heyLabel, {color: COLORS.GRAY[500]}]}
          />
        </View>

        <MText
          label={STRING.HOME.PLAY_TODAY}
          viewStyle={styles.playView}
          labelStyle={styles.playLabel}
        />
        <View style={{flex: 1, height: "100%"}}>
          <FlatList
            data={options}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => checkId(item)}
                  style={[styles.renderView]}>
                  <MImage
                    src={item?.item?.image}
                    imageStyle={styles.renderImage}
                  />
                  <MText
                    label={item?.item?.name}
                    labelStyle={{
                      color: COLORS.WHITE[100],
                      fontWeight: "bold",
                    }}
                    viewStyle={[styles.labelView]}
                  />
                </TouchableOpacity>
              );
            }}
            style={{marginBottom: 75, width: "95%", marginTop: 20}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
