import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRightSidebar: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setShowRightSidebar: (state, action) => {
      state.showRightSidebar = action.payload;
    },
  },
});

export const { setShowRightSidebar } = stateSlice.actions;

export default stateSlice.reducer;
