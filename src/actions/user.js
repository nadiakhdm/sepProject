import {getokenService} from "@/logics/User";
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
export const UserActions = {
  getToken,
};
