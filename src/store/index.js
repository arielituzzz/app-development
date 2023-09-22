import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../features/counter/counterSlice";
// import shopSlice from "../features/shop/shopSlice";
import cartSlice from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    // counter: counterSlice,
    // shop: shopSlice,
    cart: cartSlice,
  },
});
