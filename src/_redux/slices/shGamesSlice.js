import { createSlice } from "@reduxjs/toolkit";
import { getSHGames } from "../../lib/apiService";
import { ERROR_HIDE_DELAY } from "../../components/utils/constants";

export const slice = createSlice({
  name: "shGames",
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

export const fetchSHGames = () => (dispatch) => {
  dispatch(setLoading(true));
  getSHGames()
    .then(({ data: { games } }) => {
      dispatch(setData(games));
      dispatch(setLoading(false));
    })
    .catch((e) => {
      dispatch(setError(e.message));
      dispatch(setLoading(false));
      setTimeout(() => dispatch(setError(null)), ERROR_HIDE_DELAY);
    });
};

export const selectSHGames = (state) => state.shGames;

export default slice.reducer;
