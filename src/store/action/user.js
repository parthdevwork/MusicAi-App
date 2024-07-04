// import AsyncStorage from "@react-native-community/async-storage";
// import {setToken, userDetails, userid} from "../reducers/user";
// import api from "../store/api";
// import {ASYNC_KEY} from "../../constants/asyncKey";
// import {APIEND} from "../../constants/api";

// export const registerUser =
//   (
//     first_name,
//     last_name,
//     email,
//     password,
//     mobile,
//     instrument,
//     aboutUs,
//     media,
//   ) =>
//   async dispatch => {
//     try {
//       const formData = new FormData();
//       formData.append("first_name", first_name);
//       formData.append("last_name", last_name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("mobile", mobile);
//       formData.append("your_instrument", instrument);
//       formData.append("how_you_know_about_us", aboutUs);
//       {
//         media !== null
//           ? formData.append("media", {
//               uri: media,
//               name: "image.jpg",
//               type: "image/jpeg",
//             })
//           : null;
//       }
//       const res = await api.post(`/user/register`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       const uid = res?.data?.result?.data?.user_id;

//       console.log("res::(", res?.status);
//       return res?.status;
//     } catch (error) {
//       console.log("res::( eeee", error);
//       return error?.response?.data?.error?.message;
//     }
//   };

// export const loginUser = (email, password) => async dispatch => {
//   try {
//     const res = await api.post(`/user/login`, {
//       email: email,
//       password: password,
//     });

//     const token = res?.data?.result?.data?.token;
//     const uid = res?.data?.result?.data?.user_id;
//     console.log("token-->", token);
//     console.log("uid-->", uid);

//     dispatch(userid(uid));
//     dispatch(setToken(token));
//     AsyncStorage.setItem(ASYNC_KEY.TOKEN, token);
//     AsyncStorage.setItem(ASYNC_KEY.USER_ID, uid);

//     const response = {
//       status: res?.status,
//       uid: uid,
//     };
//     console.log("response::", response);

//     return response;
//   } catch (error) {
//     console.log("Errr:", error?.response?.data?.error?.message);
//   }
// };

// export const getUserDetails = userid => async dispatch => {
//   try {
//     const res = await api.get(`${APIEND.GET_USER_DETAIL}${userid}`);
//     console.log("ress:", res);
//     const userdata = res?.data?.result?.data?.users;

//     dispatch(userDetails(userdata));
//     return res;
//   } catch (error) {
//     return console.log("getUserDetails::", error);
//   }
// };

// export const updateUser =
//   (first_name, last_name, email, mobile, profile) => async dispatch => {
//     try {
//       const formData = new FormData();
//       formData.append("first_name", first_name);
//       formData.append("last_name", last_name);
//       formData.append("email", email);

//       formData.append("mobile", mobile);

//       {
//         profile !== null
//           ? formData.append("profile", {
//               uri: profile,
//               name: "image.jpg",
//               type: "image/jpeg",
//             })
//           : null;
//       }
//       const res = await api.post(`/user`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       const uid = res?.data?.result?.data?.user_id;

//       console.log("update user:", res?.status);
//       return res?.status;
//     } catch (error) {
//       console.log("update error:", error);
//       return error?.response?.data?.error?.message;
//     }
//   };

// //Frontend figma remaining

// export const verifyOtp = (userid, otp) => async dispatch => {
//   try {
//     const res = await api.post(`/user/verify-otp`, {
//       userid: userid,
//       identitytype: "email",
//       otp: otp,
//     });

//     return res?.status;
//   } catch (error) {
//     return error?.response?.data?.error?.message;
//   }
// };

// export const sendVerification = userid => async dispatch => {
//   try {
//     const res = await api.post(`/user/send-verification`, {
//       userid: userid,
//       identitytype: "email",
//     });

//     return res?.status;
//   } catch (error) {
//     return error?.response?.data?.error?.message;
//   }
// };
// //---------------------------------

// export const addMusic =
//   (
//     user_id,
//     music_file,
//     banner_image,
//     artist_name,
//     music_type,
//     import_type,
//     title,
//     extension,
//     content_type,
//   ) =>
//   async dispatch => {
//     console.log("userId", user_id);
//     console.log("music_file", music_file);
//     console.log("banner_image", banner_image);
//     console.log("artist_name", artist_name);
//     console.log("music_type", music_type);
//     console.log("import_type", import_type);
//     console.log("title", title);
//     console.log("extension", extension);
//     console.log("content_type", content_type);
//     try {
//       const formData = new FormData();
//       formData.append("user_id", user_id);
//       formData.append("music_file", {
//         uri: music_file,
//         name: "music" + extension,
//         type: import_type + content_type,
//       });

//       formData.append("banner_image", {
//         uri: banner_image,
//         name: "music_banner.jpg",
//         type: "image/jpeg",
//       });

//       formData.append("artist_name", artist_name);
//       formData.append("music_type", music_type);
//       formData.append("import_type", import_type);
//       formData.append("title", title);

//       const res = await api.post(`/musics`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // console.log("music res::", res?.status);
//       return res;
//     } catch (error) {
//       console.log("musicData api error:", error);
//     }
//   };

// // export const listMusic = () => async dispatch => {
// //   try {
// //     const res = await api.get(`/musics?per_page=10&page=1`);
// //     const musicdata = res?.data?.result?.data?.musics;
// //     return musicdata;
// //   } catch (error) {
// //     console.log("list music error:", error);
// //   }
// // };
import AsyncStorage from "@react-native-community/async-storage";
import {setToken, userDetails, userid, setMusicdetails} from "../reducers/user";
import api from "../store/api";
import {ASYNC_KEY} from "../../constants/asyncKey";
import {APIEND} from "../../constants/api";
import {store} from "../../store/store/store";

export const registerUser =
  (
    first_name,
    last_name,
    email,
    password,
    mobile,
    instrument,
    aboutUs,
    media,
  ) =>
  async dispatch => {
    try {
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("mobile", mobile);
      formData.append("your_instrument", instrument);
      formData.append("how_you_know_about_us", aboutUs);
      {
        media !== null
          ? formData.append("media", {
              uri: media,
              name: "image.jpg",
              type: "image/jpeg",
            })
          : null;
      }
      const res = await api.post(`/user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const uid = res?.data?.result?.data?.user_id;

      console.log("res::(", res?.status);
      return res?.status;
    } catch (error) {
      console.log("res::( eeee", error);
      return error?.response?.data?.error?.message;
    }
  };

export const loginUser = (email, password) => async dispatch => {
  try {
    const res = await api.post(`/user/login`, {
      email: email,
      password: password,
    });

    const token = res?.data?.result?.data?.token;
    const uid = res?.data?.result?.data?.user_id;
    console.log("token-->", token);
    console.log("uid-->", uid);

    dispatch(userid(uid));
    dispatch(setToken(token));
    AsyncStorage.setItem(ASYNC_KEY.TOKEN, token);
    AsyncStorage.setItem(ASYNC_KEY.USER_ID, uid);

    const response = {
      status: res?.status,
      uid: uid,
    };
    console.log("response::", response);

    return response;
  } catch (error) {
    console.log("Errr:", error?.response?.data?.error?.message);
  }
};

export const getUserDetails = userid => async dispatch => {
  console.log("id==reducer==>", userid);

  try {
    const res = await api.get(`${APIEND.GET_USER_DETAIL}${userid}`);
    // console.log("ress:--->", res);
    const userdata = res?.data?.result?.data?.users;

    dispatch(userDetails(userdata));
    return res;
  } catch (error) {
    return console.log("getUserDetails::", error);
  }
};

//Frontend figma remaining

export const verifyOtp = (userid, otp) => async dispatch => {
  try {
    const res = await api.post(`/user/verify-otp`, {
      userid: userid,
      identitytype: "email",
      otp: otp,
    });

    return res?.status;
  } catch (error) {
    return error?.response?.data?.error?.message;
  }
};

export const sendVerification = userid => async dispatch => {
  try {
    const res = await api.post(`/user/send-verification`, {
      userid: userid,
      identitytype: "email",
    });

    return res?.status;
  } catch (error) {
    return error?.response?.data?.error?.message;
  }
};
//---------------------------------

export const 
addMusic =
  (
    user_id,
    music_file,
    banner_image,
    artist_name,
    music_type,
    import_type,
    title,
    extension,
    content_type,
  ) =>
  async dispatch => {
    console.log("userId", user_id);
    console.log("music_file", music_file);
    console.log("banner_image", banner_image);
    console.log("artist_name", artist_name);
    console.log("music_type", music_type);
    console.log("import_type", import_type);
    console.log("title", title);
    console.log("extension", extension);
    console.log("content_type", content_type);

    try {
      const formData = new FormData();
      formData.append("user_id", user_id);
      formData.append("music_file", {
        uri: music_file,
        name: "music" + extension,
        type: import_type + content_type,
      });

      formData.append("banner_image", {
        uri: banner_image,
        name: "music_banner.jpg",
        type: "image/jpeg",
      });

      formData.append("artist_name", artist_name);
      formData.append("music_type", music_type);
      formData.append("import_type", import_type);
      formData.append("title", title);

      console.log("####", formData?._parts);
      const res = await api.post(`/musics`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("music res::", res?.status);
      return res;
    } catch (error) {
      console.log("musicData api error:", error);
    }
  };

// export const addMusic =
//   (
//     user_id,
//     music_file,
//     banner_image,
//     artist_name,
//     music_type,
//     import_type,
//     title,
//   ) =>
//   async dispatch => {
//     var myHeaders = new Headers();
//     myHeaders.append(
//       "Authorization",
//       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL211c2ljYWkuc29jaW9zcXVhcmVzLmNvbS92MS4wL3VzZXIvbG9naW4iLCJpYXQiOjE2Njk3MDc0ODgsImV4cCI6MTY3MjI5OTQ4OCwibmJmIjoxNjY5NzA3NDg4LCJqdGkiOiJUdWdwd0puVGZIdGljZGJ4Iiwic3ViIjoiMTAwMDAwMDUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.3-LU4Sx6uBBN3x171mC9b0mkcBbHSKkW6Qj08RopAQM",
//     );

//     var formdata = new FormData();
//     formdata.append("user_id", "wdnK49OQ");
//     formdata.append("music_file", {
//       uri: music_file,
//       name: "test",
//       type: import_type,
//     });
//     formdata.append("banner_image", {
//       uri: banner_image,
//       name: "test",
//       type: import_type,
//     });
//     formdata.append("artist_name", "Hardwell");
//     formdata.append("music_type", "Classic");
//     formdata.append("import_type", "audio");
//     formdata.append("title", "TestNew");

//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch("https://musicai.sociosquares.com/v1.0/musics", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log("error", error));
//   };

export const listMusic = async dispatch => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL211c2ljYWkuc29jaW9zcXVhcmVzLmNvbS92MS4wL3VzZXIvbG9naW4iLCJpYXQiOjE2NzAyMjU0NDAsImV4cCI6MTY3MjgxNzQ0MCwibmJmIjoxNjcwMjI1NDQwLCJqdGkiOiI4S1hiQTA4T2R2b2t1c3NKIiwic3ViIjoiMTAwMDAwMDUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ccbrEon870k73gJr04-5q_Th_enHteKBvL1N_ve9SX8",
  );

  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: formdata,
    redirect: "follow",
  };

  await fetch(
    "https://musicai.sociosquares.com/v1.0/musics?per_page=10&page=1",
    requestOptions,
  )
    .then(response => response.text())
    .then(result => {
      const res = JSON.parse(result);
      dispatch(setMusicdetails(res?.result?.data));
    })
    .catch(error => console.log("error", error));
};
export const updateUser =
  (first_name, last_name, email, mobile, profile) => async dispatch => {
    console.log("updatelog:", first_name, last_name, email, mobile, profile);
    try {
      const formData = new FormData();
      {
        first_name !== null && formData.append("first_name", first_name);
        // : formData.append("first_name", null);
      }
      {
        last_name !== null && formData.append("last_name", last_name);
        // : formData.append("last_name", null);
      }
      {
        email !== null && formData.append("email", email);
        // : formData.append("email", null);
      }
      {
        mobile !== null && formData.append("mobile", mobile);
        // : formData.append("mobile", null);
      }
      {
        profile !== null &&
          formData.append("media", {
            uri: profile,
            name: "image.jpg",
            type: "image/jpeg",
          });
        // : formData.append("profile", null);
      }
      console.log("formData==>", formData);
      const res = await api.post(`/user`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("update user:", res);

      const uid = res?.data?.result?.data?.user_id;

      return res?.status;
    } catch (error) {
      console.log("update error:", error);
      return error?.response?.data?.error?.message;
    }
  };
