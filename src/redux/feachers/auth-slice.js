import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  },
};
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    logIn: (state, action) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "cdxcfsfokd;fokeok32324m",
          isModerator: false,
        },
      };
    },
  },
});

export const {logIn, logout} = auth.actions;
export default auth.reducer;
