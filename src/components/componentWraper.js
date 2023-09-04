import useRedux from "@/customHooks/useRedux";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

const ComponentCover = (WrappedComponent) => {
  const ComponentWrapper = (props) => {
    const {user} = useRedux();
    const router = useRouter();
    // useEffect(() => {
    //   if (user.token === null) {
    //     router.push("/login");
    //   } else if (user.token !== null) {
    //     router.push("/");
    //   }
    // }, [user.token]);

    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
  return ComponentWrapper;
};

export default ComponentCover;
