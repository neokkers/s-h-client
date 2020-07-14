import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    apiBase: null,
  },
  reducers: {
    setBase: (state, action) => {
      localStorage.setItem("apiBase", action.payload);
      state.apiBase = action.payload;
    },
  },
});

export const { setBase } = apiSlice.actions;

export const fetchApiBase = () => (dispatch) => {
  axios.get("https://json.geoiplookup.io/").then((r) => {
    r.data.ip === "141.226.237.28"
      ? dispatch(setBase("http://192.168.0.11/api/v1"))
      : dispatch(setBase("http://141.226.237.28:3099/api/v1"));
  });
};

export const selectApiBase = (state) => state.api.apiBase;

export default apiSlice.reducer;
