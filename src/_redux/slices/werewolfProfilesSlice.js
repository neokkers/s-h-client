import { createSlice } from "@reduxjs/toolkit";
import { getWerewolfProfiles } from "../../lib/apiService";

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
      dispatch(setData(werewolfProfiles));
      dispatch(setLoading(false));
    })
    .catch((e) => {
      dispatch(setError(e.message));
      dispatch(setLoading(false));
      setTimeout(() => dispatch(setError(null)), 3000);
    });
};

export const selectWerewolfProfiles = (state) => state.werewolfProfiles;

export default slice.reducer;
