import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    currentModal: null,
    modalData: null,
  },
  reducers: {
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
    openModal: (state, action) => {
      state.currentModal = action.payload;
    },
    closeModal: (state, action) => {
      state.currentModal = null;
      state.modalData = null;
    },
  },
});

// actions
export const { openModal, closeModal, setModalData } = modalSlice.actions;

// selectors
export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
