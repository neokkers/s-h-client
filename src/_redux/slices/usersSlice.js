import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../lib/apiService";
import { ERROR_HIDE_DELAY } from "../../components/utils/constants";

export const slice = createSlice({
  name: "users",
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

export const fetchUsers = () => (dispatch) => {
  dispatch(setLoading(true));
  getUsers()
    .then(({ data: { users } }) => {
      dispatch(setData(users));
      dispatch(setLoading(false));
    })
    .catch((e) => {
      dispatch(setError(e.message));
      dispatch(setLoading(false));
      setTimeout(() => dispatch(setError(null)), ERROR_HIDE_DELAY);
    });
};

export const selectUsers = (state) => state.users;

export default slice.reducer;
