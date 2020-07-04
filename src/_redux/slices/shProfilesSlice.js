import { createSlice } from "@reduxjs/toolkit";
import { getSHProfiles } from "../../lib/apiService";
import { ERROR_HIDE_DELAY } from "../../components/utils/constants";

export const slice = createSlice({
  name: "shProfiles",
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

export const fetchSHProfiles = () => (dispatch) => {
  dispatch(setLoading(true));
  getSHProfiles()
    .then(({ data: { profiles } }) => {
      dispatch(
        setData(
          profiles.map((el) => {
            el.elo = Math.round(el.elo);
            return el;
          })
        )
      );
      dispatch(setLoading(false));
    })
    .catch((e) => {
      dispatch(setError(e.message));
      dispatch(setLoading(false));
      setTimeout(() => dispatch(setError(null)), ERROR_HIDE_DELAY);
    });
};

export const selectSHProfiles = (state) => state.shProfiles;

export default slice.reducer;
