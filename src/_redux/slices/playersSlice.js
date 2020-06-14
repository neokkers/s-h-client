import { createSlice } from "@reduxjs/toolkit";
import { incrementByAmount } from "../features/counter/counterSlice";

export const playersSlice = createSlice({
  name: "players",
  initialState: {
    data: null,
  },
  reducers: {
    setPlayers: (state, action) => {
      state.data = action.payload;
    },
    // setPlayersLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
  },
});

export const { setPlayers } = playersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const fetchPlayers = () => (dispatch) => {
//   dispatch(setPlayers({ loading, data, error }));
// };

export const selectPlayers = (state) => state.players.data;

export default playersSlice.reducer;
