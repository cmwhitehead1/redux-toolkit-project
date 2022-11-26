import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      if (!state.isOpen) state.isOpen = true;
    },
    closeModal: (state) => {
      if (state.isOpen) state.isOpen = false;
    }
  }
});

// Export actions
export const {
  openModal,
  closeModal
} = modalSlice.actions

// has a reducer property.
export default modalSlice;