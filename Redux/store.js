import { configureStore } from "@reduxjs/toolkit";
import TravelReducer from "./travelSlice";
export const store = configureStore({
  reducer: {
    travel: TravelReducer,
  },
});
