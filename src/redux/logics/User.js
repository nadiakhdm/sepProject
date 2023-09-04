import {SepApi, axiosInctanc} from "@/api/sep-api-constants";
import ApiService from "../../api/apiServiceManager";

export const getokenService = async (usr) => {
  try {
    const apiService = new ApiService();
    apiService.method = "POST";
    apiService.body = usr;
    const request = apiService.getRequest();
    const response = await axiosInctanc({url: `${SepApi}/api/login`, ...request});
    if (response && String(response.status).match(/20[01]/)) {
      router.push("/");
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserService = async (page, per_page) => {
  try {
    const apiService = new ApiService();
    apiService.method = "GET";
    const request = apiService.getRequest();
    const response = await axiosInctanc({
      url: `${SepApi}/api/users?page=${page}&per_page=${per_page}`,
      ...request,
    });
    if (response && String(response.status).match(/20[01]/)) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getSingleUserService = async (user) => {
  try {
    const apiService = new ApiService();
    apiService.method = "POST";
    apiService.body = user;
    const request = apiService.getRequest();
    const response = await axiosInctanc({
      url: `${SepApi}/api/users`,
      ...request,
    });
    if (response && String(response.status).match(/20[01]/)) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDeleteUserService = async (id) => {
  let iDes = id.toString();

  try {
    const apiService = new ApiService();
    apiService.method = "DELETE";
    apiService.headers = {"Content-Type": "application/octet-stream"};
    const request = apiService.getRequest();
    const response = await axiosInctanc({
      url: `${SepApi}/api/users/${iDes}`,
      ...request,
    });
    const pattern = /^20[0-9]$/;
    if (response && pattern.test(String(response.status))) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
