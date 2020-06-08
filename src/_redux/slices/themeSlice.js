import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../../components/themes/themes";

export const slice = createSlice({
  name: "theme",
  initialState: {
    currentTheme:
      localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      localStorage.setItem("theme", action.payload.name);
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = slice.actions;

export const selectTheme = (state) => state.theme.currentTheme;

export default slice.reducer;
