import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: { latitude: null, longitude: null },
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      if (!state.location.latitude || !state.location.longitude) {
        state.location.latitude = action.payload.latitude;
        state.location.longitude = action.payload.longitude;
      }
    },
  },
});

export const { setLocation } = generalSlice.actions;

export default generalSlice.reducer;
