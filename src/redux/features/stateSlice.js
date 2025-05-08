import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRightSidebar: false,
  stake: 100,
  showChip: false,
  refetchBalance: false,
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
  },
});

export const { setShowRightSidebar, setShowChip, setStake, setRefetchBalance } =
  stateSlice.actions;

export default stateSlice.reducer;
