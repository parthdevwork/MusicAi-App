import {REGISTER} from "../store/actionTypes";

const initialState = {
  registerUser: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {...state, registerUser: action.payload};

    default:
      return state;
  }
};

export default userReducer;
