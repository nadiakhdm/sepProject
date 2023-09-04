import {useState, useEffect} from "react";
import {makeStyles} from "@mui/styles";

import useRedux from "../../customHooks/useRedux";

import {UserActions} from "@/redux/actions/user";
import {useRouter} from "next/navigation";
const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6rem",
    minHeight: " 100vh",

    backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)",
  },
  login_form: {
    background: "#eeee",
    padding: "65px",
    position: "relative",
    borderRadius: " 6px",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
    position: "relative",
    margin: " 20% 0px",
  },
  useroutline: {
    background: " #eee",
    padding: "22px",
    width: "76px",
    position: "absolute",
    top: "1%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  useroutlineIcon: {
    margin: "0px 2px",
    fontSize: " 30px",
    color: "blueviolet",
  },
  userout: {
    color: "blueviolet",
  },
  btn: {
    width: " 100%",
  },
});
const LoginLogic = () => {
  const router = useRouter();
  const {user, dispatch} = useRedux();
  /*---------------------- states ------------------- */
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();

  /*-------------------- functions ------------------ */

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onFinish = async () => {
    await dispatch(UserActions.getToken(state));
  };
  if (user.token) {
    router.push("/");
  }
  /*------------------------------------------------- */
  return {
    handleChange,
    onFinish,
    useStyles,
    classes,
  };
};

export default LoginLogic;
