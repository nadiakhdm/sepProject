import {userConnst} from "./actionConst";

const getoken = (token) => ({
  type: userConnst.GET_TOKEN,
  payload: token,
});
const getAllUsersRequest = (users) => ({
  type: userConnst.GET_ALL_USER,
  payload: users,
});

export const UserActions = {
  getAllUsersRequest,
  getoken,
};
