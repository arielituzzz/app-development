import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  localId: null,
  imageCamera: null,
  name: null,
  lastName: null,
  email: null,
  gender: null,
  update: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        user: true,
        token: action.payload.idToken,
        localId: action.payload.localId,
      };
    },
    setDataUser: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        gender: action.payload.gender,
        email: action.payload.email,
        update: action.payload.update,
      };
    },

    clearUser: () => {
      return {
        user: null,
        token: null,
        localId: null,
        imageCamera: null,
        name: null,
        lastName: null,
        email: null,
        gender: null,
        update: null,
      };
    },
    setCameraImage: (state, action) => {
      return { ...state, imageCamera: action.payload };
    },
  },
});

export const { setUser, clearUser, setCameraImage, setDataUser } =
  authSlice.actions;

export default authSlice.reducer;
