import { createSlice } from "@reduxjs/toolkit";
import { getWerewolfProfiles } from "../../lib/apiService";
import { ERROR_HIDE_DELAY } from "../../components/utils/constants";

export const slice = createSlice({
  name: "werewolfProfiles",
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

export const fetchWerewolfProfiles = () => (dispatch) => {
  dispatch(setLoading(true));
  getWerewolfProfiles()
    .then(({ data: { werewolfProfiles } }) => {
      dispatch(
        setData(
          werewolfProfiles.map((el) => {
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

export const selectWerewolfProfiles = (state) => state.werewolfProfiles;

export default slice.reducer;
