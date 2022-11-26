import { createSlice } from "@reduxjs/toolkit";
import getCartItems from "../../data/fetch";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
    increaseCount: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      cartItem.amount++
    },
    decreaseCount: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      cartItem.amount--;
    },
    calculateTotal: (state, { payload }) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    }
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      console.log(payload)
      state.cartItems = payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = true;
    }
  }
});

// Actions for changing state.
export const {
  clearCart,
  removeItem,
  increaseCount,
  decreaseCount,
  calculateTotal
} = cartSlice.actions;

// cartSlice has a reducer property.
export default cartSlice;