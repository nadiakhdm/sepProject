import {userConnst} from "../actions/actionConst";
import baseReducer from "./baseReducer";

const initialState = {
  token: null,
  isAuth: false,
  user: null,
  userList: null,
};

const user = baseReducer(initialState, {
  [userConnst.GET_TOKEN](state, action) {
    return {...state, token: action.payload.token, isAuth: true};
  },
  [userConnst.GET_ALL_USER](state, action) {
    return {...state, userList: action.payload};
  },
});

export default user;
