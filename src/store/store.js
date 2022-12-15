import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import brandsReducer from "./reducers/brandsSlice";
import cartReducer from "./reducers/cartSlice";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    brands: brandsReducer,
    cart: cartReducer
  },
});
