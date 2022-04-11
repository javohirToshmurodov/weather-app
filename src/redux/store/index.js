import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../global";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
