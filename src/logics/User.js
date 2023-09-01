import {SepApi} from "@/api/sep-api-constants";
import ApiService from "../api/apiServiceManager";
import {UserActions} from "@/actions/user";
import {toast} from "react-toastify";
import useRedux from "@/customHooks/useRedux";
import axios from "axios";
import {useRouter} from "next/navigation";
export const getokenService = async (user) => {
  const route = useRouter();
  const dispatch = useRedux();

  // try {
  //   const apiService = new ApiService();
  //   apiService.method = "POST";
  //   apiService.body = {user};
  //   const request = apiService.getRequest();

  //   const response = await axios(`https://reqres.in/api/login`, request);
  //   if (response && String(response.status).match(/20[01]/)) {
  //     // dispatch(UserActions.getoken(response.token));
  //     console.log("response.token", response.token);
  //     toast("success", {hideProgressBar: true, autoClose: 2000, type: "success"});
  //   }
  // } catch (error) {
  //   toast("error", {hideProgressBar: true, autoClose: 2000, type: "error"});
  // }
  // try {
  //   const response = await axios.post(`https://reqres.in/api/login`, user);

  //   dispatch(UserActions.getoken(response.token));
  //   route.push("/");
  //   toast("success", {hideProgressBar: true, autoClose: 2000, type: "success"});
  // } catch (error) {
  //   console.error(error);
  // }
};
