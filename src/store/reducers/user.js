// import {createSlice} from "@reduxjs/toolkit";

// const initialState = {
//   token: "",
//   userid: "",
//   userdetails: {},
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     userid: (state, action) => {
//       state.userid = action.payload;
//     },
//     setToken: (state, action) => {
//       state.token = action.payload;
//     },
//     userDetails: (state, action) => {
//       state.userdetails = action.payload;
//     },
//   },
// });

// export default userSlice.reducer;

// export const {userid, setToken, userDetails} = userSlice.actions;
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userid: "",
  userdetails: {},
  musicdetails:{}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userid: (state, action) => {
      state.userid = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    userDetails: (state, action) => {
      // console.log("lslslsls===>",action.payload);
      state.userdetails = action.payload;
    },
    setMusicdetails: (state, { payload }) => {
      state.musicdetails = payload;
  },
  },
});

export default userSlice.reducer;

export const {userid, setToken, userDetails,setMusicdetails} = userSlice.actions;
