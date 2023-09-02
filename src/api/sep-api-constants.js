import axios from "axios";
// Server Address for Rest API
let SepApi = null;
// console.log("process.env", process.env);
// SepApi = process.env.SEP_URL_APP;

SepApi = "https://reqres.in";

const axiosInctanc = axios.create({});
export {SepApi, axiosInctanc};
