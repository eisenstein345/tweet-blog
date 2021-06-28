import React from "react";

const AppContext = React.createContext({
  userNameInput: "",
  setUserNameInput: "",
  tweetsArray: "",
  setTweetsArray: "",
  setIsDisabled: "",
  isDisabled: "",
  loading: "",
  setLoading: "",
  serverErrorMessage: "",
  setServerErrorMessage: "",
  serverTweetsArray: "",
  setServerTweetsArray: "",
  refreshData: "",
  setRefreshData: "",
});

export default AppContext;
