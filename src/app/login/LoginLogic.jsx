import {useState, useEffect} from "react";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";

import useRedux from "../../customHooks/useRedux";
import {getokenService} from "@/logics/User";
import axios from "axios";
import {SepApi} from "@/api/sep-api-constants";
import {UserActions} from "@/actions/user";

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
  const dispatch = useDispatch();
  /*---------------------- states ------------------- */
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();

  useEffect(() => {
    console.log("state", state);
  }, [state]);
  /*-------------------- functions ------------------ */

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onFinish = async () => {
    // await getokenService(state);
    try {
      const response = await axios.post(`https://reqres.in/api/login`, state);

      dispatch(UserActions.getoken(response.token));
      route.push("/");
      toast("success", {hideProgressBar: true, autoClose: 2000, type: "success"});
    } catch (error) {
      console.error(error);
    }
  };
  /*------------------------------------------------- */
  return {
    handleChange,
    onFinish,
    useStyles,
    classes,
  };
};

export default LoginLogic;
