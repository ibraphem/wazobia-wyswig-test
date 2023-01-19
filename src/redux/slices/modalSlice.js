import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    imageUploadModal: {
      status: false,
    },   
  },
  
  reducers: {
    setImageUploadModal: (state, { payload }) => {
      state.imageUploadModal = {
        status: payload.status,
      };
    },
  },
});

export const { setImageUploadModal } = modalSlice.actions;
export default modalSlice.reducer;
