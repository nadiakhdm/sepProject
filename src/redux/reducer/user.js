import {userConnst} from "../actions/actionConst";
import baseReducer from "./baseReducer";

const initialState = {
  total_pages: null,
  token: null,
  isAuth: false,
  user: null,
  allUser: null,
  SingleUser: null,
};
const user = baseReducer(initialState, {
  [userConnst.GET_TOKEN](state, action) {
    return {...state, token: action.payload.token, isAuth: true};
  },
  [userConnst.REMOVE_TOKEN](state, action) {
    return {...state, token: null, isAuth: false};
  },
  [userConnst.GET_ALL_USER](state, action) {
    return {...state, allUser: action.payload1.data, total_pages: action.payload2};
  },
  [userConnst.GET_SINGLE_USER](state, action) {
    return {...state, SingleUser: action.payload};
  },
});

export default user;
