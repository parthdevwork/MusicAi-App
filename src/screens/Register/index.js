import {View, Text} from "react-native";
import React, {useState} from "react";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import MText from "../../components/Text";
import {STRING} from "../../constants/string";
import {COLORS} from "../../constants/color";
import Avatar from "../../components/Avatar";
import MTextInput from "../../components/TextInput";
import {useNavigation} from "@react-navigation/native";
import MDropDown from "../../components/DropDown";
import {scale, verticalScale} from "react-native-size-matters";
import MGradient from "../../components/Gradient";
import {styles} from "./style";
import {NAVKEY} from "../../constants/navkey";
import {SafeAreaView} from "react-native-safe-area-context";
import ImagePicker from "react-native-image-crop-picker";
import {Formik} from "formik";
import {Validators} from "../../utils/validators/validators";
import {useDispatch} from "react-redux";
import {getUserDetails, loginUser, registerUser} from "../../store/action/user";
import {instrument, about} from "../../utils/json";

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedabout, setselectedabout] = useState(null);
  const [selectedimage, setselectedimage] = useState(null);

  const mydata = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    "Phone number": "",
  };

  const onSelect = (item, type) => {
    switch (type) {
      case "instrument": {
        setSelectedItem(item);
        break;
      }
      case "aboutus": {
        setselectedabout(item);
        break;
      }
      default:
        break;
    }
  };

  const onSelectimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log("Image path", image?.path);
      setselectedimage(image?.path);
    });
  };

  const storeData = async props => {
    let first_name = props?.values?.Firstname;
    let last_name = props?.values?.Lastname;
    let email = props?.values?.Email;
    let password = props?.values?.Password;
    let mobile = props?.values["Phone number"];
    let instrument = selectedItem?.name;
    let aboutUs = selectedabout?.name;
    let media = selectedimage;
    // console.log("Mobile::", mobile);

    const registerRes = await dispatch(
      registerUser(
        first_name,
        last_name,
        email,
        password,
        mobile,
        instrument,
        aboutUs,
        media,
      ),
    );
    console.log("registerRes::", registerRes);
    if (registerRes === 201) {
      login(email, password);
    }
  };
  const login = async (email, password) => {
    console.log("email==>", email);

    const loginRes = await dispatch(loginUser(email, password));
    console.log("🚀loginRes", loginRes);

    if (loginRes?.status === 200) {
      const userid = loginRes?.uid;
      console.log("userid:", userid);
      const detailRes = await dispatch(getUserDetails(userid));
      console.log("detailRes->", detailRes);

      if (detailRes?.status === 200) {
        navigation.navigate(NAVKEY.TAB_NAV);
      }
    } else {
      alert("Email or Password incorrect");
    }
  };
  const handleRegister = props => {
    if (props.isValid) {
      storeData(props);
    } else {
      console.log("invalid?????", props.errors);
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.scroll}>
      <SafeAreaView style={styles.safeContainer}>
        <MText
          label={STRING.REGISTER.CREATE}
          viewStyle={styles.createView}
          labelStyle={styles.createLabel}
        />
        {/* <Avatar
          Alabel={"+"}
          imagepath={selectedimage}
          handleButton={onSelectimage}
          Aview={{marginTop: 30}}
        />
        <MText
          label={STRING.REGISTER.SET_PHOTO}
          viewStyle={styles.photoTxtView}
          labelStyle={styles.photoTxt}
        /> */}

        <Formik
          initialValues={mydata}
          validateOnChange="true"
          validateOnMount="false"
          validationSchema={Validators.RegisterValidate()}
          onSubmit={props => {
            handleRegister(props);
          }}>
          {props => {
            return (
              <View style={{justifyContent: "center"}}>
                <MTextInput
                  parentContainer={[styles.inputContainer, {}]}
                  inputStyle={styles.textInput}
                  isLefticon={true}
                  iconName="person-outline"
                  iconType="material"
                  iconColor={COLORS.GRAY[300]}
                  iconSize={20}
                  placeholder={STRING.REGISTER.FIRSTNAME}
                  placeholderTextColor={COLORS.GRAY[200]}
                  onBlur={() => {
                    props.setFieldTouched("Firstname");
                  }}
                  onChangeText={props.handleChange("Firstname")}
                  value={props.values.Firstname}
                />
                {props.errors.Firstname && props.errors.Firstname && (
                  <Text
                    style={{
                      marginTop: 5,
                      alignSelf: "flex-start",
                      color: COLORS.GRAY[300],
                    }}>
                    {"*" + props.errors.Firstname}
                  </Text>
                )}
                <MTextInput
                  parentContainer={[styles.inputContainer, {marginTop: 15}]}
                  inputStyle={styles.textInput}
                  isLefticon={true}
                  iconName="person-outline"
                  iconType="material"
                  iconColor={COLORS.GRAY[300]}
                  iconSize={20}
                  placeholder={STRING.REGISTER.LASTNAME}
                  placeholderTextColor={COLORS.GRAY[200]}
                  onBlur={() => {
                    props.setFieldTouched("Lastname");
                  }}
                  onChangeText={props.handleChange("Lastname")}
                  value={props.values.Lastname}
                />
                {props.errors.Lastname && props.errors.Lastname && (
                  <Text
                    style={{
                      marginTop: 5,
                      alignSelf: "flex-start",
                      color: COLORS.GRAY[300],
                    }}>
                    {"*" + props.errors.Lastname}
                  </Text>
                )}

                <MTextInput
                  parentContainer={[styles.inputContainer, {marginTop: 15}]}
                  inputStyle={styles.textInput}
                  isLefticon={true}
                  iconName="mail-outline"
                  iconType="material"
                  iconColor={COLORS.GRAY[300]}
                  iconSize={20}
                  placeholder={STRING.REGISTER.EMAIL}
                  placeholderTextColor={COLORS.GRAY[200]}
                  onBlur={() => {
                    props.setFieldTouched("Email");
                  }}
                  onChangeText={props.handleChange("Email")}
                  value={props.values.Email}
                />
                {props.errors.Email && props.errors.Email && (
                  <Text
                    style={{
                      marginTop: 5,
                      alignSelf: "flex-start",
                      color: COLORS.GRAY[300],
                    }}>
                    {"*" + props.errors.Email}
                  </Text>
                )}
                <MTextInput
                  parentContainer={[styles.inputContainer, {marginTop: 15}]}
                  inputStyle={styles.textInput}
                  isLefticon={true}
                  iconName="lock-outline"
                  iconType="material"
                  iconColor={COLORS.GRAY[300]}
                  iconSize={20}
                  placeholder={STRING.REGISTER.PASSWORD}
                  placeholderTextColor={COLORS.GRAY[200]}
                  onBlur={() => {
                    props.setFieldTouched("Password");
                  }}
                  value={props.values.Password}
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("Password")}
                />
                {props.errors.Password && props.errors.Password && (
                  <Text
                    style={{
                      marginTop: 5,
                      alignSelf: "flex-start",
                      color: COLORS.GRAY[300],
                    }}>
                    {"*" + props.errors.Password}
                  </Text>
                )}
                <MTextInput
                  parentContainer={[styles.inputContainer, {marginTop: 15}]}
                  inputStyle={styles.textInput}
                  isLefticon={true}
                  iconName="call"
                  iconType="material"
                  iconColor={COLORS.GRAY[300]}
                  iconSize={20}
                  maxLength={10}
                  placeholder={STRING.REGISTER.MOBILE}
                  placeholderTextColor={COLORS.GRAY[200]}
                  onBlur={() => {
                    props.setFieldTouched["Phone number"];
                  }}
                  value={props.values["Phone number"]}
                  keyboardType="number-pad"
                  onChangeText={props.handleChange("Phone number")}
                />
                {props.errors["Phone number"] &&
                  props.errors["Phone number"] && (
                    <Text
                      style={{
                        marginTop: 5,
                        alignSelf: "flex-start",
                        color: COLORS.GRAY[300],
                      }}>
                      {"*" + props.errors["Phone number"]}
                    </Text>
                  )}

                <MText
                  label={STRING.REGISTER.INSTRUMENT}
                  viewStyle={{marginTop: 30}}
                  labelStyle={styles.instrumentLabel}
                />

                <MDropDown
                  data={instrument}
                  type="instrument"
                  value={selectedItem}
                  onSelect={onSelect}
                  touchableView={{
                    marginTop: scale(10),
                  }}
                />
                {/* <MGradient
                  linearButton={true}
                  linearView={styles.gradientBtnView}
                  lBtnView={{
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center",
                  }}
                  lLabel={STRING.REGISTER.MEMBERSHIP}
                  linearLabel={styles.gradientLabel}
                  handleButton={() => {
                    if (selectedItem === null) {
                      alert("Select instrument");
                    } else {
                      alert(STRING.COMMON.PRODUCTION);
                      // navigation.navigate(NAVKEY.MEMBERSHIP);
                    }
                  }}
                /> */}
                <MText
                  label={STRING.REGISTER.ABOUT_US}
                  labelStyle={[
                    styles.gradientLabel,
                    {marginTop: verticalScale(10)},
                  ]}
                />
                <MDropDown
                  data={about}
                  type="aboutus"
                  value={selectedabout}
                  onSelect={onSelect}
                  touchableView={{
                    marginTop: verticalScale(10),
                  }}
                />
                <MGradient
                  linearButton={true}
                  linearView={styles.gradientBtnView}
                  lBtnView={{
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center",
                  }}
                  lLabel={STRING.REGISTER.CREATE_ACC}
                  linearLabel={styles.gradientLabel}
                  handleButton={() => {
                    handleRegister(props);
                  }}
                />
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default Register;
