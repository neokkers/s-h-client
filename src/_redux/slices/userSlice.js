import { createSlice } from "@reduxjs/toolkit";
import { incrementByAmount } from "../features/counter/counterSlice";
import jwt from "jwt-decode";
import { closeModal } from "./modalSlice";
import { login, register } from "../../lib/apiService";

export const slice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    loading: false,
    userData: {
      username: null,
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
  },
});
export const { setUser, setUserLoading } = slice.actions;

export const authFromToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const { username, id } = jwt(token);
    dispatch(
      setUser({
        auth: true,
        userData: {
          username,
          id,
        },
      })
    );
  }
};
export const logout = () => (dispatch) => {
  const token = localStorage.removeItem("token");
  dispatch(
    setUser({
      auth: false,
      userData: {
        username: null,
      },
    })
  );
};
export const registerUserThunk = ({ username, email, password }) => (
  dispatch
) =>
  register({ username, email, password })
    .then(({ token }) => {
      localStorage.setItem("token", token);
      dispatch(authFromToken());
      dispatch(closeModal());
    })
    .catch((e) => {
      console.error("error from RegisterModal", e);
    });
export const loginUserThunk = ({ username, password }) => (dispatch) =>
  login({ username, password })
    .then(({ token }) => {
      localStorage.setItem("token", token);
      dispatch(authFromToken());
      dispatch(closeModal());
    })
    .catch((e) => {
      console.error("error from LoginModal", e);
    });

export const selectUser = (state) => state.user;

export default slice.reducer;
