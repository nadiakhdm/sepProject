import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {makeStyles} from "@mui/styles";
import {UserActions} from "@/redux/actions/user";

import useRedux from "../customHooks/useRedux";
import {ESP_LIST_VIEW_PARAMS} from "@/redux/actions/actionConst";

const useStyles = makeStyles({
  btn: {
    margin: "10px 5px ",
  },
});

const ListLogic = (history) => {
  const router = useRouter();
  const [User, setUser] = useState({name: "", job: ""});
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const [data, setData] = useState({users: null});
  const [column, setColumn] = useState(null);
  const classes = useStyles();
  const [total_pages, settotal_pages] = useState(1);
  const [page, setPage] = useState(null);
  const {user, dispatch} = useRedux();
  /*---------------------- states ------------------- */

  useEffect(() => {
    dispatch(UserActions.getAllUser(ESP_LIST_VIEW_PARAMS.page, ESP_LIST_VIEW_PARAMS.per_page));
  }, []);

  useEffect(() => {
    setData({...data, users: user.allUser && user.allUser});
    const keysArray = user.allUser && user.allUser.map((obj) => Object.keys(obj));
    let columnKey = keysArray && keysArray[1];
    var customecolumn =
      columnKey &&
      columnKey.map((itm) => ({
        title: itm,
        dataIndex: itm,
        editable: true,
      }));

    setColumn(customecolumn);
    settotal_pages(user.total_pages);
    setPage(user.page);
  }, [user.allUser, user.total_pages]);

  useEffect(() => {
    console.log("user", user);
  }, [user.total_pages]);
  useEffect(() => {}, []);
  if (!user.isAuth) {
    router.push("/login");
  }
  /*-------------------- functions ------------------ */
  const handleChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddUser = async () => {
    await dispatch(UserActions.getSingleUser(User));
    await dispatch(
      UserActions.getAllUser(ESP_LIST_VIEW_PARAMS.page, ESP_LIST_VIEW_PARAMS.per_page)
    );
    setOpenAddModal(false);
  };
  const signout = () => {
    dispatch(UserActions.removeToken());
  };

  const HandleOpenAddModal = () => {
    setOpenAddModal(!OpenAddModal);
  };
  const HandleCloseAddModal = () => {
    setOpenAddModal(false);
    setUser({
      name: "",
      job: "",
    });
  };

  /*------------------------------------------------- */
  return {
    User,
    user,
    handleChange,
    handleAddUser,
    HandleCloseAddModal,
    OpenAddModal,
    HandleOpenAddModal,
    router,
    data,
    classes,
    signout,
    column,
    dispatch,
    total_pages,
    page,
  };
};

export default ListLogic;
