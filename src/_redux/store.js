import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";
import playersReducer from "./slices/playersSlice";
import modalReducer from "./slices/modalSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer,
    players: playersReducer,
    modal: modalReducer,
  },
});
