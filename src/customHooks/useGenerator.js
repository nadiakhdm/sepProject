import useRedux from "./useRedux";
var md5 = require("md5");

function useGenerator() {
  const { user } = useRedux();
  return {
    systemToken: md5(navigator.appVersion),
    token: user.token ? user.token : null,
  };
}

export default useGenerator;
