import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer,
  },
});