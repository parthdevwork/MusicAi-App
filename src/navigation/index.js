import React, {useEffect, useState,} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAVKEY} from "../constants/navkey";
import AsyncStorage from "@react-native-community/async-storage";
import Start from "../screens/Start";
import {ASYNC_KEY} from "../constants/asyncKey";
import Register from "../screens/Register";
import{useDispatch} from 'react-redux'
import Tabnav from "./tabnavigation";
import Login from "../screens/Login";
import {getUserDetails} from "../store/action/user";
import {setToken, userDetails, userid} from "../store/reducers/user";
const Stack = createNativeStackNavigator();

const RouteNavigation = ({auth}) => {
  // const [remember, setRemember] = useState("false");
  const dispatch = useDispatch();
  console.log("$$$$", auth);

  // useEffect(() => {
  //   getMyStringValue();
  // }, []);

  // async function getMyStringValue() {
  //   try {
  //     const on = await AsyncStorage.getItem(ASYNC_KEY.ON);
  //     console.log("<<==", on, typeof on);
  //     {
  //       on === null ? (on = "false") : String(on);
  //     }
  //     setRemember(on === null ? "false" : String(on));
  //   } catch (error) {
  //     console.log("Async Error::", error);
  //   }
  // }

  useEffect(()=>{
    userIF();
  },[auth])
  const userIF = async()=>{
    if(auth){
      const UserId = await  AsyncStorage.getItem(ASYNC_KEY.USER_ID);
      const Token = await  AsyncStorage.getItem(ASYNC_KEY.TOKEN);
      dispatch(userid(UserId));
      dispatch(setToken(Token));
      
      const detailRes = await dispatch(getUserDetails(UserId));    
      // console.log("details===>",detailRes);
    }
  
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={auth === true ? NAVKEY.TAB_NAV : NAVKEY.START}>
        <Stack.Screen name={NAVKEY.START} component={Start} />
        <Stack.Screen name={NAVKEY.LOGIN} component={Login} />
        <Stack.Screen name={NAVKEY.REGISTER} component={Register} />
        <Stack.Screen name={NAVKEY.TAB_NAV} component={Tabnav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
