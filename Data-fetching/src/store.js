import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Redux/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
});
