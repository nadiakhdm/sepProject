import {userSelector} from "@/reducer/selectors";
import {useDispatch, useSelector} from "react-redux";
const useRedux = () => {
  /*------------------------- use dispatch ------------------ */
  const dispatch = useDispatch();
  /*------------------------- user ------------------ */
  const user = useSelector(userSelector);

  /*--------------------------------------------------------- */
  return {
    dispatch,
    user,
  };
};

export default useRedux;
