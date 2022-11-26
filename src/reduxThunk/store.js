import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/modal/modalSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalSlice.reducer
  }
})

export default Store;