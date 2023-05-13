import { createSlice } from "@reduxjs/toolkit";

const menueSlice = createSlice({
  name: "menue",
  initialState: {
    menue: [],
    total: 0,
  },
  reducers: {
    addToMenue: (state, action) => {
      state.menue.push(action.payload);
      state.total += action.payload.price;
    },
    reset: (state) => {
      state.menue = [];
      state.total = 0;
    },
  },
});

export const { addToMenue, reset } = menueSlice.actions;
export default menueSlice.reducer;
