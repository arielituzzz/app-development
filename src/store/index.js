import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import shopSlice from "../features/shop/shopSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice,
  },
});
