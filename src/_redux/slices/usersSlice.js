import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../lib/apiService";

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
      setTimeout(() => dispatch(setError(null)), 3000);
    });
};

export const selectUsers = (state) => state.users;

export default slice.reducer;
