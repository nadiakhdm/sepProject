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

const ListLogic = () => {
  /*---------------------- states ------------------- */
  const [User, setUser] = useState({name: "", job: ""});
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const [data, setData] = useState({users: null});
  const [column, setColumn] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [Id, setId] = useState(null);
  /*---------------------- hock ------------------- */
  const classes = useStyles();
  const {user, dispatch} = useRedux();
  const router = useRouter();

  useEffect(() => {
    dispatch(UserActions.getAllUser(ESP_LIST_VIEW_PARAMS.page, ESP_LIST_VIEW_PARAMS.per_page));
  }, []);

  useEffect(() => {
    if (user.token && user.token !== null) {
      setData({...data, users: user.allUser && user.allUser});
    }

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
  }, [user.allUser]);

  useEffect(() => {}, []);

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

  const onSelectChange = (newSelectedRowKeys) => {
    setId(newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const start = () => {
    dispatch(UserActions.getDeleteUser(Id));
    setSelectedRowKeys([]);
  };
  const hasSelected = selectedRowKeys.length > 0;
  /*------------------------------------------------- */
  return {
    User,
    user,
    hasSelected,
    rowSelection,
    start,
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
  };
};

export default ListLogic;
