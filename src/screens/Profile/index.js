import {StyleSheet, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {COLORS} from "../../constants/color";
import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import {useNavigation} from "@react-navigation/native";
import {scale} from "react-native-size-matters";
import {useDispatch, useSelector} from "react-redux";
import {FONTSIZE} from "../../constants/font";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import MGradient from "../../components/Gradient";
import Header from "../../components/Header";
import {getUserDetails, updateUser} from "../../store/action/user";
import {NAVKEY} from "../../constants/navkey";
import ImagePicker from "react-native-image-crop-picker";
import Avatar from "../../components/Avatar";
import MTextInput from "../../components/TextInput";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ASYNC_KEY} from "../../constants/asyncKey";
import AsyncStorage from "@react-native-community/async-storage";

let profile = [
  {
    firstName: "First Name:",
    lasttName: "Last Name:",
    name: "Name:",
    userName: "John Dow",
    email: "Email:",
    userEmail: "johndow@gmail.com",
    phone: "Phone:",
    number: "8912378939",
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profilePic = useSelector(
    state => state.rootReducer.userReducer?.registerUser?.profilePic,
  );
  const userDetails = useSelector(state => state?.user);

  const userId = useSelector(state => state?.user?.userid);
  const firstName = useSelector(state => state?.user?.userdetails?.first_name);
  const lastName = useSelector(state => state?.user?.userdetails?.last_name);
  const email = useSelector(state => state?.user?.userdetails?.email);
  const mobile = useSelector(state => state?.user?.userdetails?.mobile);
  const picture = useSelector(state => state?.user?.userdetails?.profile_pic);
  console.log("picture:", picture);

  const [fname, setFirstName] = useState(null);
  const [lname, setLastName] = useState(null);
  const [pic, setPic] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);
  console.log("fnamr::", firstName);

  const updatePic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.log(image);
      setPic(image?.path);
    });
  };

  const verifyFields = () => {
    updateData();
  };
  const updateData = async () => {
    let first_name = fname;
    let last_name = lname;
    let email = mail;
    let mobile = phone;
    let profile = pic;
    console.log("@@@@@@@@@", first_name, last_name, email, mobile, profile);
    const updateRes = await dispatch(
      updateUser(first_name, last_name, email, mobile, profile),
    );
    console.log(updateRes);
    {
      updateRes === 201
        ? alert("Profile Updated")
        : alert("Something went wrong");
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.awareView}>
      <SafeAreaView style={styles.safeContainer}>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            borderColor: COLORS.GRAY[300],
            borderWidth: 1,
            alignItems: "center",
            height: 200,
            justifyContent: "center",
            marginTop: scale(10),
          }}>
          <Avatar
            imagepath={pic !== null ? pic : picture?.url}
            handleButton={() => {
              updatePic();
            }}
            Alabel={"+"}
          />
        </View>

        {profile.map((item, i) => {
          return (
            <>
              <MText
                label={STRING.PROFILE.YOUR_PROFILE}
                viewStyle={{
                  marginTop: scale(30),
                  width: "80%",
                  alignSelf: "center",
                  borderBottomWidth: 0.5,
                  borderColor: COLORS.GRAY[300],
                }}
                labelStyle={{
                  marginVertical: scale(20),
                  fontSize: FONTSIZE.TWELVE,
                  color: COLORS.GRAY[300],
                }}
              />
              <View
                key={i}
                style={{
                  borderBottomWidth: 1,
                  borderColor: COLORS.GRAY[300],
                  flexDirection: "row",
                  alignSelf: "center",
                  width: "80%",
                }}>
                <MText
                  label={item?.firstName}
                  labelStyle={{
                    color: COLORS.GRAY[300],
                    fontSize: FONTSIZE.THIRTEEN,
                  }}
                  viewStyle={{
                    marginVertical: scale(15),
                    marginRight: scale(10),
                  }}
                />
                <TextInput
                  placeholder={firstName}
                  placeholderTextColor={COLORS.WHITE[100]}
                  onChangeText={setFirstName}
                  value={fname !== null ? fname : firstName}
                  style={{color: COLORS.WHITE[100], width: "70%"}}
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: COLORS.GRAY[300],
                  flexDirection: "row",
                  alignSelf: "center",
                  width: "80%",
                }}>
                <MText
                  label={item?.lasttName}
                  labelStyle={{
                    color: COLORS.GRAY[300],
                    fontSize: FONTSIZE.THIRTEEN,
                  }}
                  viewStyle={{
                    marginVertical: scale(15),
                    marginRight: scale(10),
                  }}
                />

                <TextInput
                  placeholder={lastName}
                  placeholderTextColor={COLORS.WHITE[100]}
                  onChangeText={setLastName}
                  value={lname !== null ? lname : lastName}
                  style={{
                    color: COLORS.WHITE[100],
                    marginLeft: scale(10),
                    width: "68%",
                  }}
                />
              </View>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: COLORS.GRAY[300],
                  flexDirection: "row",
                  alignSelf: "center",
                  width: "80%",
                }}>
                <MText
                  label={item?.email}
                  labelStyle={{
                    color: COLORS.GRAY[300],
                    fontSize: FONTSIZE.THIRTEEN,
                  }}
                  viewStyle={{
                    marginVertical: scale(15),
                    marginRight: scale(10),
                  }}
                />
                {/* <MText
                label={email === null ? item?.userEmail : email}
                viewStyle={{marginVertical: scale(15)}}
                labelStyle={{
                  color: COLORS.WHITE[100],
                  fontSize: FONTSIZE.THIRTEEN,
                  fontWeight: "bold",
                }}
              /> */}
                <TextInput
                  placeholder={email}
                  placeholderTextColor={COLORS.WHITE[100]}
                  onChangeText={setMail}
                  value={mail !== null ? mail : email}
                  style={{color: COLORS.WHITE[100], width: "82%"}}
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: COLORS.GRAY[300],
                  flexDirection: "row",
                  alignSelf: "center",
                  width: "80%",
                }}>
                <MText
                  label={item?.phone}
                  labelStyle={{
                    color: COLORS.GRAY[300],
                    fontSize: FONTSIZE.THIRTEEN,
                  }}
                  viewStyle={{
                    marginVertical: scale(15),
                    marginRight: scale(10),
                  }}
                />
                {/* <MText
                label={mobile === null ? item?.number : mobile}
                viewStyle={{marginVertical: scale(15)}}
                labelStyle={{
                  color: COLORS.WHITE[100],
                  fontSize: FONTSIZE.THIRTEEN,
                  fontWeight: "bold",
                }}
              /> */}
                <TextInput
                  placeholder={mobile}
                  placeholderTextColor={COLORS.WHITE[100]}
                  onChangeText={setPhone}
                  value={phone !== null ? phone : mobile}
                  keyboardType="number-pad"
                  maxLength={10}
                  style={{color: COLORS.WHITE[100], width: "80%"}}
                />
              </View>
            </>
          );
        })}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: scale(20),
            marginHorizontal: scale(30),
          }}>
          <MGradient
            linearButton={true}
            lLabel={STRING.PROFILE.HELP}
            linearView={{
              width: scale(80),
              height: scale(30),
              borderRadius: 8,
            }}
            lBtnView={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
            linearLabel={{fontSize: FONTSIZE.TWELVE}}
            handleButton={() => {
              alert(STRING.COMMON.PRODUCTION);
            }}
          />
          <MGradient
            linearButton={true}
            lLabel={STRING.PROFILE.UPDATE}
            linearView={{
              width: scale(80),
              height: scale(30),
              borderRadius: 8,
            }}
            lBtnView={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
            linearLabel={{fontSize: FONTSIZE.TWELVE}}
            handleButton={() => {
              verifyFields();
            }}
          />
          <MGradient
            linearButton={true}
            lLabel={STRING.PROFILE.LOGOUT}
            linearView={{
              width: scale(80),
              height: scale(30),
              borderRadius: 8,
            }}
            lBtnView={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
            linearLabel={{fontSize: FONTSIZE.TWELVE}}
            handleButton={() => {
              AsyncStorage.removeItem(ASYNC_KEY.TOKEN);
              navigation.navigate(NAVKEY.LOGIN);
              // AsyncStorage.removeItem(ASYNC_KEY.EMAIL);
              //  AsyncStorage.removeItem(ASYNC_KEY.PASSWORD);
            }}
          />
        </View>
        {/* </View> */}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  awareView: {
    backgroundColor: COLORS.BLACK[600],
    flex: 1,
  },
  safeContainer: {
    backgroundColor: COLORS.BLACK[600],
    flex: 1,
  },
  labelStyle: {
    fontSize: FONTSIZE.TWELVE,
  },
});
