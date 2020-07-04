import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";
import usersReducer from "./slices/usersSlice";
import werewolfProfilesReducer from "./slices/werewolfProfilesSlice";
import werewolfGamesReducer from "./slices/werewolfGamesSlice";
import shProfilesReducer from "./slices/shProfilesSlice";
import shGamesReducer from "./slices/shGamesSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    modal: modalReducer,
    users: usersReducer,
    werewolfProfiles: werewolfProfilesReducer,
    werewolfGames: werewolfGamesReducer,
    shProfiles: shProfilesReducer,
    shGames: shGamesReducer,
  },
});
