import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { IMAGES } from "../../constants/image";
import MGradient from "../../components/Gradient";
import { STRING } from "../../constants/string";
import { COLORS } from "../../constants/color";
import MText from "../../components/Text";
import MTextInput from "../../components/TextInput";
import { TextInput } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import ToggleSwitch from "toggle-switch-react-native";
import { styles } from "./style";
import { NAVKEY } from "../../constants/navkey";
import { Formik } from "formik";
import { Validators } from "../../utils/validators/validators";
import { scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getUserDetails, loginUser } from "../../store/action/user";
import AsyncStorage from "@react-native-community/async-storage";
import { ASYNC_KEY } from "../../constants/asyncKey";
import MImage from "../../components/Image";

const Login = () => {
  const IsFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [on, setOn] = useState(false);
  const [aEmail, setAEmail] = useState("");
  const [aPass, setAPass] = useState("");

  const token = useSelector((state) => state?.user?.token);
  // console.log("token:", token);
  const [loginData, useLogin] = useState({
    Email: "",
    Password: "",
  });

  useEffect(() => {
    checkasyncdata();
  }, []);

  const checkasyncdata = async () => {
    const value1 = await AsyncStorage.getItem(ASYNC_KEY.EMAIL);
    const value2 = await AsyncStorage.getItem(ASYNC_KEY.PASSWORD);

    console.log("########" , value1 , value2);
    if (value1 !== null && value2 !== null) {
      setAEmail(value1);
      setAPass(value2);
    } else {
     
    }
  };

  // console.log("Amail:::::", aEmail);
  // useEffect(() => {
  //   if (token === "null") {
  //     setOn(false);
  //   } else {
  //     setOn(true);
  //   }
  // }, [on]);
  // useEffect(() => {
  //   if (on === false) {
  //     AsyncStorage.setItem(ASYNC_KEY.TOKEN, "null");
  //   } else {
  //     AsyncStorage.setItem(ASYNC_KEY.TOKEN, token);
  //   }
  // }, [on]);
  // {
  //   on === true
  //     ? AsyncStorage.setItem(ASYNC_KEY.TOKEN, token)
  //     : AsyncStorage.setItem(ASYNC_KEY.TOKEN, "null");
  // }
  useEffect(() => {
    if (IsFocused) {
      // login()
    }
  }, [IsFocused]);
  const handleSignIn = (props) => {
    if (props.isValid) {
      props.handleSubmit();
    } else {
      // console.log("invalid?????", props.errors);
    }
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      checkData();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [token]);

  const checkData = async () => {
    try {
      const value1 = await AsyncStorage.getItem(ASYNC_KEY.EMAIL);
      const value2 = await AsyncStorage.getItem(ASYNC_KEY.PASSWORD);
      // console.log("EMAIL====>",value1);
      // console.log("PASSWORD====>",value2);
      if (value1 !== null && value2 !== null) {
        setOn(true);
        loginData.Email = value1;
        loginData.Password = value2;
      } else {
        // console.log("NOT REMEMBER------------->")
        loginData.Email = "";
        loginData.Password = "";
        // console.log("LOGINEMAIL------------->",loginData.Email)
      }
    } catch (error) {
      // console.log("Error===>",error)
    }
  };

  useEffect(() => {
    if (on === true) {
      _retrieveData();
    } else {
      loginData.Password = "";
      loginData.Email = "";
    }
  }, [on]);

  const login = async (props) => {
    // console.log("aEmail8989898898:", aEmail);
    // console.log("aPass:", aPass);
    let email = aEmail !== null ? aEmail : props.Email;

    let password = aPass !== null ? aPass : props.Password;

    if (on === true) {
      AsyncStorage.setItem(ASYNC_KEY.TOKEN, token);
      AsyncStorage.setItem(ASYNC_KEY.EMAIL, email);
      AsyncStorage.setItem(ASYNC_KEY.PASSWORD, password);
      _retrieveData();
    } else {
      const value1 = await AsyncStorage.getItem(ASYNC_KEY.EMAIL);
      if (value1 !== null) {
        AsyncStorage.removeItem(ASYNC_KEY.EMAIL);
        AsyncStorage.removeItem(ASYNC_KEY.PASSWORD);
      }
    }

    const loginRes = await dispatch(loginUser(email, password));

    console.log("🚀loginRes", loginRes);

    if (loginRes?.status === 200) {
      const id = loginRes?.uid;
      // console.log("id===login=>", id);
      const detailRes = await dispatch(getUserDetails(id));

      if (detailRes?.status === 200) {
        navigation.navigate(NAVKEY.TAB_NAV);
      }
    } else {
      alert("Email or Password incorrect");
    }
  };

  const _retrieveData = async () => {
    try {
      const value1 = await AsyncStorage.getItem(ASYNC_KEY.EMAIL);
      const value2 = await AsyncStorage.getItem(ASYNC_KEY.PASSWORD);
      if (value1 !== null) {
        // console.log("val1", value1);
        setAEmail(value1);
        loginData.Email = value1;
        // console.log("aEmail*-*", aEmail);
      }
      if (value2 !== null) {
        // console.log("val2", value2);
        // console.log("aPass", aPass);
        setAPass(value2);
        loginData.Password = value2;
      }
    } catch (error) {
      console.log("Async error:", error);
    }
  };

  return (
    // console.log("aEmail*->>>>>*", aEmail, loginData),
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: COLORS.BLACK[200] }}
    >
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <MImage viewStyle={styles.linearStyle} src={IMAGES.APP_LOGO} />

          <MText
            label={STRING.LOGIN.HEY}
            viewStyle={styles.introView}
            labelStyle={styles.introLabel}
          />
          <MText label={STRING.LOGIN.WELCOME} labelStyle={styles.introLabel} />

          {/* <Formik
            initialValues={{ email: aEmail, password: aPass }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={{ backgroundColor: "pink" }}>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  style={{ borderWidth: 1 }}
                />
                <TouchableOpacity onPress={handleSubmit} title="Submit">
                  <Text>HEllo</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik> */}

          <Formik
              initialValues={loginData}
              validateOnChange="true"
              validateOnMount="true"
              validationSchema={Validators.LoginValidate() }
              onSubmit={(props) => { 
                login(props);
              }}
            >

              {(props) => {
                console.log("*******--->",props)
                return (
                  <View
                    style={{ justifyContent: "center", marginTop: scale(20) }}
                  >
                    <MTextInput
                      parentContainer={styles.inputContainer}
                      inputStyle={styles.textInput}
                      isLefticon={true}
                      iconName="mail-outline"
                      iconType="material"
                      iconColor={COLORS.GRAY[300]}
                      iconSize={20}
                      placeholder={STRING.LOGIN.LOGIN}
                      placeholderTextColor={COLORS.GRAY[200]}
                      onBlur={() => {
                        props.setFieldTouched("Email");
                      }}
                      onChangeText={props.handleChange("Email")}
                      value={props.values.Email}
                    />
                    {props.errors.Email &&
                      props.errors.Email &&
                      props.touched.Email && (
                        <Text
                          style={{
                            marginTop: 5,
                            alignSelf: "flex-start",

                            color: COLORS.GRAY[300],
                          }}
                        >
                          {"*" + props.errors.Email}
                        </Text>
                      )}

                    <MTextInput
                      parentContainer={[
                        styles.inputContainer,
                        { marginTop: scale(10) },
                      ]}
                      inputStyle={styles.textInput}
                      isLefticon={true}
                      iconName="lock-outline"
                      iconType="material"
                      iconColor={COLORS.GRAY[300]}
                      iconSize={20}
                      placeholder={STRING.LOGIN.PASSWORD}
                      placeholderTextColor={COLORS.GRAY[200]}
                      onBlur={() => {
                        props.setFieldTouched("Password");
                      }}
                      value={props.values.Password}
                      keyboardType="default"
                      secureTextEntry={true}
                      onChangeText={props.handleChange("Password")}
                    />
                    {props.errors.Password &&
                      props.errors.Password &&
                      props.touched.Password && (
                        <Text
                          style={{
                            marginTop: 5,

                            alignSelf: "flex-start",
                            color: COLORS.GRAY[300],
                          }}
                        >
                          {"*" + props.errors.Password}
                        </Text>
                      )}

                    <View style={styles.rememberView}>
                      <ToggleSwitch
                        isOn={on}
                        onColor="green"
                        offColor={COLORS.GRAY[200]}
                        size="medium"
                        onToggle={(isOn) =>
                          on === true ? setOn(false) : setOn(true)
                        }
                      />
                      <MText
                        label={STRING.LOGIN.REMEMBER}
                        labelStyle={styles.rememberLabel}
                      />
                    </View>

                    <View style={styles.bottomContainer}>
                      <MGradient
                        linearButton={true}
                        linearView={styles.btnGradientView}
                        lLabel={STRING.LOGIN.SIGNUP}
                        linearLabel={styles.btnLabel}
                        lBtnView={styles.linearView}
                        handleButton={() => {
                          try {
                            navigation.navigate(NAVKEY.REGISTER);
                          } catch (error) {
                            console.log(
                              "Register click error : ",
                              JSON.stringify(error)
                            );
                          }
                        }}
                      />

                      <MGradient
                        linearButton={true}
                        linearView={styles.btnGradientView}
                        lLabel={STRING.LOGIN.SIGNIN}
                        linearLabel={styles.btnLabel}
                        // show={props.isValid}
                        lBtnView={styles.linearView}
                        handleButton={() => {
                          handleSignIn(props);
                        }}
                      />
                    </View>
                  </View>
                );
              }}
            </Formik>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default Login;
