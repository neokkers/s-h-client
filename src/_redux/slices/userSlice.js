import { createSlice } from "@reduxjs/toolkit";
import { incrementByAmount } from "../features/counter/counterSlice";
import jwt from "jwt-decode";
import { closeModal } from "./modalSlice";

export const slice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    userData: {
      username: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.auth = action.payload.auth;
      state.userData = action.payload.userData;
    },
  },
});
export const { setUser } = slice.actions;

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
export const registerUserThunk = (
  registerUser,
  { username, email, password }
) => (dispatch) =>
  registerUser({ variables: { username, email, password } })
    .then(
      ({
        data: {
          registerUser: {
            user: { username, id },
            token,
            werewolfProfile: { userId, won, lost, elo },
          },
        },
      }) => {
        console.log(username, id, userId, won, lost, elo);
        localStorage.setItem("token", token);
        dispatch(
          setUser({
            auth: true,
            userData: {
              username,
              id,
              werewolfProfile: { userId, won, lost, elo },
            },
          })
        );
        dispatch(closeModal());
      }
    )
    .catch((e) => {
      console.error("error from RegisterModal", e);
    });
export const loginUserThunk = (f, { username, password }) => (dispatch) =>
  f({ variables: { username, password } })
    .then(
      ({
        data: {
          login: {
            user: { username, id },
            token,
            werewolfProfile: { userId, won, lost, elo },
          },
        },
      }) => {
        console.log(username, id, userId, won, lost, elo);
        localStorage.setItem("token", token);
        dispatch(
          setUser({
            auth: true,
            userData: {
              username,
              id,
              werewolfProfile: { userId, won, lost, elo },
            },
          })
        );
        dispatch(closeModal());
      }
    )
    .catch((e) => {
      console.error("error from LoginModal", e);
    });

export const selectUser = (state) => state.user;

export default slice.reducer;
