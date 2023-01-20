import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    imageUploadModal: {
      status: false,
    }, 
    showDropdown: {
      status: false,
    },
  },
  
  reducers: {
    setImageUploadModal: (state, { payload }) => {
      state.imageUploadModal = {
        status: payload.status,
      };
    },
    setShowDropdown: (state, { payload }) => {
      state.showDropdown = {
        status: payload.status,
      };
    },
  },
});

export const { setImageUploadModal, setShowDropdown } = modalSlice.actions;
export default modalSlice.reducer;
