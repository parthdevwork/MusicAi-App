import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import userSlice from "../reducers/user";

export const store = configureStore({
  reducer: {
    rootReducer,
    user: userSlice,
  },
});
