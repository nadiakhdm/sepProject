import {userConnst} from "./actionConst";

export const getUserRequest = (user) => ({
  type: userConnst.GET_USER,
  payload: user,
});
