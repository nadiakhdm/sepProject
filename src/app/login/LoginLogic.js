import React, { useState, useEffect } from "react";
import User from "../../logics/logics/user/User";
import useRedux from "../../customHooks/useRedux";
import useGenerator from "../../customHooks/useGenerator";
import { defaultLogin } from "../../actions/user";
import Setting from "../../logics/logics/setting/Setting";

const userObj = User.make();
const setting = Setting.make();



const LoginLogic = (history) => {
  /*---------------------- states ------------------- */
  const [state, setState] = useState({
    otpCode: "",
    mobileNumber: "",
  });
  /*---------------------- redux -------------------- */
//   const { user, loader, dispatch } = useRedux();
  /*-------------------- generator ------------------ */
//   const { systemToken } = useGenerator();
  /*-------------------- sid effect ----------------- */
  useEffect(() => {
    // dispatch(defaultLogin());
    // setting.getInit();
    // return () => {
    //   dispatch(defaultLogin());
    // };
  }, []);
  /*-------------------- functions ------------------ */
//   const modifyNumber = () => {
//     dispatch(defaultLogin());
//   };

//   const sendMobile = (): void => {
//     userObj.loginUser(state.mobileNumber);
//   };

//   const sendOtp = (): void => {
//     userObj.checkOtpUser(systemToken, state.mobileNumber, state.otpCode);
//   };

  /**
   *
   * @param e we set our value for all inputs
   */

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  /*------------------------------------------------- */
  return {
    // sectionMode: user.logeInCondition,
    // sendMobile,
    // sendOtp,
    handleChange,
    // loader,
    // modifyNumber,
  };
};

export default LoginLogic;
