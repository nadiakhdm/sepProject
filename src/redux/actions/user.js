import {getAllUserService, getSingleUserService, getokenService} from "@/redux/logics/User";
import {userConnst} from "./actionConst";
import {toast} from "react-toastify";

function getToken(data) {
  return async (dispatch) => {
    const response = await getokenService(data);
    if (response && String(response.status).match(/20[01]/)) {
      dispatch(success(response.data));

      toast("success login", {hideProgressBar: true, autoClose: 2000, type: "success"});
    } else {
      dispatch(failure(" FAILED!!!"));
      toast("fail login", {hideProgressBar: true, autoClose: 2000, type: "error"});
    }
  };

  function success(data) {
    return {
      type: userConnst.GET_TOKEN,
      payload: data,
    };
  }
  function failure(error) {
    return {type: userConnst.FAIL_TOKEN};
  }
}
function getAllUser(page, per_page) {
  return async (dispatch) => {
    const response = await getAllUserService(page, per_page);
    if (response && String(response.status).match(/20[01]/)) {
      dispatch(success(response.data, response.data.total_pages));
    } else {
      dispatch(failure(" FAILED!!!"));
      toast("fail login", {hideProgressBar: true, autoClose: 2000, type: "error"});
    }
  };

  function success(data, total_pages) {
    return {
      type: userConnst.GET_ALL_USER,
      payload1: data,
      payload2: total_pages,
    };
  }
  function failure(error) {
    return {type: userConnst.GET_ALL_USER_FAIL};
  }
}
export const removeToken = () => ({
  type: userConnst.REMOVE_TOKEN,
});

function getSingleUser(user) {
  return async (dispatch) => {
    const response = await getSingleUserService(user);
    if (response && String(response.status).match(/20[01]/)) {
      dispatch(success(response.data));
    } else {
      dispatch(failure(" FAILED!!!"));
      toast("fail login", {hideProgressBar: true, autoClose: 2000, type: "error"});
    }
  };

  function success(data) {
    return {
      type: userConnst.GET_SINGLE_USER,
      payload1: data,
    };
  }
  function failure(error) {
    return {type: userConnst.GET_SINGLE_USER_FAIL};
  }
}
export const UserActions = {
  getToken,
  removeToken,
  getAllUser,
  getSingleUser,
};
