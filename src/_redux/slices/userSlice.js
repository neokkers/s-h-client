import { createSlice } from "@reduxjs/toolkit";
import jwt from "jwt-decode";
import { closeModal } from "./modalSlice";
import { ERROR_HIDE_DELAY } from "../../components/utils/constants";

export const slice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    loading: false,
    error: null,
    userData: {
      username: null,
      role: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.auth = action.payload.auth;
      state.userData = action.payload.userData;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setUser, setUserLoading, setUserError } = slice.actions;

export const authFromToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const { username, id, role } = jwt(token);
    dispatch(
      setUser({
        auth: true,
        userData: {
          username,
          id,
          role,
        },
      })
    );
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(
    setUser({
      auth: false,
      userData: {
        username: null,
      },
    })
  );
};
export const authInterface = (f, params) => (dispatch) => {
  dispatch(setUserLoading(true));
  f(params)
    .then(({ data: { token } }) => {
      localStorage.setItem("token", token);
      dispatch(authFromToken());
      dispatch(closeModal());
      dispatch(setUserLoading(false));
    })
    .catch((e) => {
      console.error("error from RegisterModal", e);
      dispatch(setUserError(e.message));
      dispatch(setUserLoading(false));
      setTimeout(() => dispatch(setUserError(null)), ERROR_HIDE_DELAY);
    });
};

export const selectUser = (state) => state.user;
export const selectUserRole = (state) => state.user.userData.role;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;

export default slice.reducer;
