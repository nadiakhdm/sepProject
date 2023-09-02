import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {makeStyles} from "@mui/styles";
import {UserActions} from "@/actions/user";

import useRedux from "../customHooks/useRedux";

const useStyles = makeStyles({
  btn: {
    margin: "10px 5px ",
  },
});

const ListLogic = (history) => {
  const router = useRouter();
  const [User, setUser] = useState({name: "", job: ""});
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const classes = useStyles();
  const {user, dispatch} = useRedux();
  /*---------------------- states ------------------- */

  useEffect(() => {
    if (!user.isAuth) {
      router.push("/login");
    }
  }, []);

  /*-------------------- functions ------------------ */
  const handleChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddUser = async () => {
    await dispatch(UserActions.getAllUsersRequest(User));
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
  const start = () => {
    setLoading(true);

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  /*------------------------------------------------- */
  return {
    rowSelection,
    hasSelected,
    User,
    start,
    onSelectChange,
    loading,
    handleChange,
    handleAddUser,
    HandleCloseAddModal,
    OpenAddModal,
    HandleOpenAddModal,
    router,
    selectedRowKeys,
    classes,
  };
};

export default ListLogic;
