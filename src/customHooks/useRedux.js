import {useDispatch, useSelector} from "react-redux";
const useRedux = () => {
  /*------------------------- use dispatch ------------------ */
  const dispatch = useDispatch();
  /*------------------------- user ------------------ */
  const user = useSelector((state) => state.user);

  /*--------------------------------------------------------- */
  return {
    dispatch,
    user,
  };
};

export default useRedux;
