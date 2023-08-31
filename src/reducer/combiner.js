import {combineReducers} from "redux";
import user from "./user";
import {SepConst} from "../actions/actionConst";
const appReducer = combineReducers({
  user,
});
const reducer = (state, action) => {
  if (action.type === SepConst.SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default reducer;
