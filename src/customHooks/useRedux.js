import {useDispatch, useSelector} from "react-redux";
// import {
//   loaderSelector,
//   callbackSelector,
//   categorySelector,
//   userSelector,
//   aboutUsSelector,
//   contactUsSelector,
//   settingSelector,
//   postSelector
// } from "../reducer/selectors";
import {Dispatch} from "redux";

const useRedux = () => {
  /*------------------------- use dispatch ------------------ */
  const dispatch = useDispatch();
  // const loader = useSelector(loaderSelector);
  // const callback = useSelector(callbackSelector);
  // const category = useSelector(categorySelector);
  // const user = useSelector(userSelector);
  // const setting = useSelector(settingSelector);
  // const post =useSelector(postSelector);
  // const aboutUs = useSelector(aboutUsSelector);
  // const contactUs = useSelector(contactUsSelector);
  /*--------------------------------------------------------- */
  return {
    dispatch,
    // loader,
    // callback,
    // category,
    // user,
    // aboutUs,
    // contactUs,
    // post,
    // setting
  };
};

export default useRedux;
