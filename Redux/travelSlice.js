import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelInformation: null,
};

export const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelInformation: (state, action) => {
      state.travelInformation = action.payload;
    },
  },
});

//actions used for useDispatch hook

export const { setOrigin, setDestination, setTravelInformation } =
  travelSlice.actions;

//selectors for useSelector hook

export const selectOrigin = (state) => state.travel.origin;
export const selectDestination = (state) => state.travel.destination;
export const selectTravelInfo = (state) => state.travel.travelInformation;

export default travelSlice.reducer;
