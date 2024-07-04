import {useNavigation} from "@react-navigation/native";
import {useCallback, useState} from "react";
import {View} from "react-native";
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
import {styles} from "./style";
import DocumentPicker from "react-native-document-picker";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

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

const Import = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userID = useSelector(state => state?.user?.userid);
  // console.log("userID:::", userID);
  // const doc = props?.route?.params?.params;
  // console.log("dkskkslfjk:==>", doc);
  // const type = props?.route?.params?.type;
  // const img = props?.route?.params?.img;
  const [title, setTitle] = useState(null);
  const [artist, setArtist] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [docName, setDocName] = useState("");
  const [docType, setDocType] = useState("");
  const [musicFileData, setMusicFile] = useState("");
  const [image, setImage] = useState(false);

  const addData = async () => {
    let user_id = userID;
    let music_file = musicFileData?.uri;
    console.log("musicfile:", music_file);
    let banner_image = null;
    let artist_name = artist;
    let music_type = selectedItem?.name;
    let import_type = docType.split("/")[0];
    let extension = ".mp3";
    let content_type = "/mpeg";

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
        content_type,
      ),
    );
    // console.log("Music Res::", musicRes);
  };

  const importDocuments = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [DocumentPicker.types.audio],
        copyTo: "documentDirectory",
      });

      {
        response.map(docDetails => {
          setDocName(docDetails?.name);
          setDocType(docDetails?.type);
          setMusicFile(docDetails);
        });
      }

      setImage(true);
    } catch (error) {
      console.log("Error:", error);
    }
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.safeContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <MText label={STRING.IMPORT.TITLE} labelStyle={styles.scanLabel} />
          <MImage
            pressable={true}
            src={image === true ? IMAGES.MOZART : IMAGES.SCAN}
            viewStyle={styles.imgView}
            imageStyle={styles.img}
            touchStyle={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            imagePress={() => {
              importDocuments();
            }}
          />
          <MText
            label={STRING.SCAN.DOC_NAME}
            viewStyle={styles.docView}
            labelStyle={styles.docLabel}
          />
          <MTextInput
            placeholder={STRING.SCAN.TITLE}
            placeholderTextColor={COLORS.GRAY[200]}
            parentContainer={styles.inputView}
            onChangeText={setTitle}
            inputStyle={{color: COLORS.GRAY[200]}}
          />
          <MTextInput
            placeholder={STRING.SCAN.ARTIST}
            placeholderTextColor={COLORS.GRAY[200]}
            parentContainer={styles.inputView}
            onChangeText={setArtist}
            inputStyle={{color: COLORS.GRAY[200]}}
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
              // navigation.navigate(NAVKEY.COMPOSER_LIB);
            }}
          />
        </View>
        {/* <Tabbarstatic /> */}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Import;
