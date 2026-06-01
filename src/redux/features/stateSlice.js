import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRightSidebar: false,
  stake: 100,
  showChip: false,
  refetchBalance: false,
  lobby: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setShowRightSidebar: (state, action) => {
      state.showRightSidebar = action.payload;
    },
    setStake: (state, action) => {
      state.stake = action.payload;
    },
    setShowChip: (state, action) => {
      state.showChip = action.payload;
    },
    setRefetchBalance: (state, action) => {
      state.refetchBalance = action.payload;
    },
    setLobby: (state, action) => {
      state.lobby = action.payload;
    },
  },
});

export const {
  setShowRightSidebar,
  setShowChip,
  setStake,
  setRefetchBalance,
  setLobby,
} = stateSlice.actions;

export default stateSlice.reducer;
