import {UserService} from "../logics/User";
import {userConnst} from "./actionConst";
import {toast} from "react-toastify";

function getToken(data) {
  return async (dispatch) => {
    const response = await UserService.getokenService(data);
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
    const response = await UserService.getAllUserService(page, per_page);
    if (response && String(response.status).match(/20[01]/)) {
      dispatch(success(response.data, response.data.total_pages));
    } else {
      dispatch(failure(" FAILED!!!"));
      toast("fail connect to all user", {hideProgressBar: true, autoClose: 2000, type: "error"});
    }
  };

  function success(data, total_pages) {
    return {
      type: userConnst.GET_ALL_USER,
      payload1: data,
      payload4: data.total,
    };
  }
  function failure(error) {
    return {type: userConnst.GET_ALL_USER_FAIL};
  }
}
export const removeToken = () => ({
  type: userConnst.REMOVE_TOKEN,
});

function getDeleteUser(Id) {
  return async (dispatch) => {
    const response = await UserService.getDeleteUserService(Id);
    const pattern = /^20[0-9]$/;
    if (response && pattern.test(String(response.status))) {
      dispatch(success(response.data));
      toast("success delete", {hideProgressBar: true, autoClose: 2000, type: "success"});
    } else {
      dispatch(failure(" FAILED!!!"));
      toast("fail delete", {hideProgressBar: true, autoClose: 2000, type: "error"});
    }
  };

  function success(data) {
    return {
      type: userConnst.DELETE_SUCCESS,
      payload1: data,
    };
  }
  function failure(error) {
    return {type: userConnst.DELETE_SUCCESS_FAIL};
  }
}

function getSingleUser(user) {
  return async (dispatch) => {
    const response = await UserService.getSingleUserService(user);
    if (response && String(response.status).match(/20[01]/)) {
      dispatch(success(response.data));
      toast("success addUser", {hideProgressBar: true, autoClose: 2000, type: "success"});
    } else {
      dispatch(failure(" FAILED!!!"));
      toast("fail Adduser", {hideProgressBar: true, autoClose: 2000, type: "error"});
    }
  };

  function success(data) {
    return {
      type: userConnst.GET_ALL_USER,
      payload1: data,
    };
  }
  function failure(error) {
    return {type: userConnst.GET_ALL_USER_FAIL};
  }
}
export const UserActions = {
  getToken,
  removeToken,
  getAllUser,
  getSingleUser,
  getDeleteUser,
};
