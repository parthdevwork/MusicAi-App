import React, {useState} from "react";
import RouteNavigation from "./src/navigation";
import {store} from "./src/store/store/store";
import {Provider as PaperProvider} from "react-native-paper";
import {Provider as StoreProvider} from "react-redux";
import {LogBox} from "react-native";
import {useEffect} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {ASYNC_KEY} from "./src/constants/asyncKey";
LogBox.ignoreAllLogs([
  "Non-serializable values were found in the navigation state",
]);

const App = () => {
  const [disable, setDisable] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getMyToken();
  }, []);

  async function getMyToken() {
    try {
      const token = await AsyncStorage.getItem(ASYNC_KEY.TOKEN);

      console.log("<<==token:", token, typeof token);
      if (token === null) {
        setAuth(false);
        console.log("Token NULL===>");
        setDisable(false);
      } else {
        console.log("Token NOT NULL===>");
        setAuth(true);
        setDisable(false);
      }
    } catch (error) {
      console.log("Async Error::", error);
    }
  }
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        {disable === false ? <RouteNavigation auth={auth} /> : null}
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
