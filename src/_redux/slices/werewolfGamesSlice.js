import { createSlice } from "@reduxjs/toolkit";
import { getWerewolfGames } from "../../lib/apiService";
import { ERROR_HIDE_DELAY } from "../../components/utils/constants";

export const slice = createSlice({
  name: "werewolfGames",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setData, setLoading, setError } = slice.actions;

export const fetchWerewolfGames = () => (dispatch) => {
  dispatch(setLoading(true));
  getWerewolfGames()
    .then(({ data: { werewolfGames } }) => {
      dispatch(setData(werewolfGames));
      dispatch(setLoading(false));
    })
    .catch((e) => {
      dispatch(setError(e.message));
      dispatch(setLoading(false));
      setTimeout(() => dispatch(setError(null)), ERROR_HIDE_DELAY);
    });
};

export const selectWerewolfGames = (state) => state.werewolfGames;

export default slice.reducer;
