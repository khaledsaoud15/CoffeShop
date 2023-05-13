import { configureStore } from "@reduxjs/toolkit";
import menueSlice from "./menueSlice";

export const store = configureStore({
  reducer: {
    menue: menueSlice,
  },
});
