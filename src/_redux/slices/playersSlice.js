import { createSlice } from "@reduxjs/toolkit";
import { incrementByAmount } from "../features/counter/counterSlice";
import { gql } from "apollo-boost";

export const playersSlice = createSlice({
  name: "players",
  initialState: {
    data: null,
    loading: false,
    error: false,
  },
  reducers: {
    setPlayers: (state, action) => {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
    setPlayersLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPlayers, setPlayersLoading } = playersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const fetchPlayers = () => (dispatch) => {
//   dispatch(setPlayers({ loading, data, error }));
// };

export const selectPlayers = (state) => state.players;

export default playersSlice.reducer;
