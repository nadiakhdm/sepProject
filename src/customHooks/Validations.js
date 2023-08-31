import {useCallback} from "react";

export default function useValidations() {
  return {
    emailValidate: useCallback((_email) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(_email)) {
        return true;
      }
      return false;
    }, []),
  };
}
