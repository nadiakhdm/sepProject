import {userConnst} from "../actions/actionConst";
import baseReducer from "./baseReducer";

const initialState = {
  token: null,
  user: null,
};

const user = baseReducer(initialState, {
  [userConnst.GET_USER](state, action) {
    return {...state, user: action.payload, token: action.payload.token && action.payload.token};
  },
});

export default user;
