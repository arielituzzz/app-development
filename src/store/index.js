import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import cartSlice from "../features/cart/cartSlice";
import userSlice from "../features/user/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../services/shopApi";

const store = configureStore({
  reducer: {
    shop: shopSlice,
    cart: cartSlice,
    user: userSlice,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export default store;
