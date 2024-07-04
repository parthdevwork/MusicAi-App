import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {Image, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import MDropDown from "../../components/DropDown";
import MGradient from "../../components/Gradient";
import MImage from "../../components/Image";
import MText from "../../components/Text";
import MTextInput from "../../components/TextInput";
import {COLORS} from "../../constants/color";
import {IMAGES} from "../../constants/image";
import {NAVKEY} from "../../constants/navkey";
import {STRING} from "../../constants/string";
import Tabbarstatic from "../../navigation/Tabbar/tabbarstatic";
import {addMusic} from "../../store/action/user";
import { styles } from "./style";


let typeMusic = [
  {
    id: 1,
    name: "Genres",
  },
  {
    id: 2,
    name: "Classic",
  },
  {
    id: 3,
    name: "Pop",
  },
];

const Scan = props => {
  // console.log("scan props::",props?.route?.);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userID = useSelector(state => state?.user?.userid);
  console.log("userID:::", userID);
  const doc = props?.route?.params?.params;
  const type = props?.route?.params?.type;
  const img = props?.route?.params?.params;

  const [title, setTitle] = useState(null);
  const [artist, setArtist] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const addData = async () => {
    let user_id = userID;
    let music_file = doc;
    let banner_image = img;
    let artist_name = artist;
    let music_type = selectedItem?.name;
    let import_type = type;
    let extension = ".jpg";
    let content_type = "/jpeg";

    const musicRes = await dispatch(
      addMusic(
        user_id,
        music_file,
        banner_image,
        artist_name,
        music_type,
        import_type,
        title,
        extension,
        content_type

      ),
    );
    // console.log("Music Res::", musicRes);
    {
      musicRes?.status === 200
        ? navigation.navigate(NAVKEY.COMPOSER_LIB)
        : alert("Upload Error");
    }
    navigation.navigate(NAVKEY.COMPOSER_LIB);
  };

  return (
    <>
      <KeyboardAwareScrollView style={styles.keyboardView}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.container}>
            <MText label={STRING.SCAN.SCAN} labelStyle={styles.scanLabel} />
            {/* <View style={styles.imgView}>
              <Image
                style={[{width: "100%", height: "100%"}]}
                source={{uri: doc}}
              />
            </View> */}

            {doc === undefined || null ? (
              <MImage
                // src={IMAGES.SCAN_NOTE}
                src={doc}
                viewStyle={styles.imgView}
                imageStyle={styles.img}
              />
            ) : (
              <View style={styles.imgView}>
                <Image
                  style={[{width: "100%", height: "100%"}]}
                  source={{uri: img}}
                />
              </View>
            )}

            <MText
              label={STRING.SCAN.DOC_NAME}
              viewStyle={styles.docView}
              labelStyle={styles.docLabel}
            />
            <MTextInput
              inputStyle={{color: COLORS.GRAY[200]}}
              placeholder={STRING.SCAN.TITLE}
              placeholderTextColor={COLORS.GRAY[200]}
              parentContainer={styles.inputView}
              onChangeText={setTitle}
            />
            <MTextInput
              inputStyle={{color: COLORS.GRAY[200]}}
              placeholder={STRING.SCAN.ARTIST}
              placeholderTextColor={COLORS.GRAY[200]}
              parentContainer={styles.inputView}
              onChangeText={setArtist}
            />
            <MDropDown
              data={typeMusic}
              type="Genres"
              value={selectedItem}
              onSelect={item => setSelectedItem(item)}
              touchableView={styles.dropDownView}
            />
            <MGradient
              linearButton={true}
              lLabel={STRING.SCAN.ADD}
              linearView={styles.addGradient}
              lBtnView={styles.addTouchable}
              linearLabel={styles.addLabel}
              handleButton={() => {
                addData();
              }}
              // handleButton={() => {
              //   scanRes();
              // }}
            />
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
      <View style={{position: "absolute", bottom: 0, width: "100%"}}>
        <Tabbarstatic />
      </View>
    </>
  );
};

export default Scan;
