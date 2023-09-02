import {SepApi, axiosInctanc} from "@/api/sep-api-constants";
import ApiService from "../api/apiServiceManager";
import {toast} from "react-toastify";

export const getokenService = async (usr) => {
  try {
    const apiService = new ApiService();
    apiService.method = "POST";
    apiService.body = usr;
    const request = apiService.getRequest();
    const response = await axiosInctanc({url: `${SepApi}/api/login`, ...request});
    if (response && String(response.status).match(/20[01]/)) {
      return response;
    }
  } catch (error) {
    console.log(error);
    // toast("error", {hideProgressBar: true, autoClose: 2000, type: "error"});
  }
};
