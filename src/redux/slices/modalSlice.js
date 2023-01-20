import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    imageUploadModal: {
      status: false,
    }, 

    videoLinkModal: {
      status: false,
    }, 

    socialModal: {
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
    setVideoLinkModal: (state, { payload }) => {
      state.videoLinkModal = {
        status: payload.status,
      };
      
    },
    setSocialModal: (state, { payload }) => {
      state.socialModal = {
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

export const { setImageUploadModal, setShowDropdown, setVideoLinkModal, setSocialModal } = modalSlice.actions;
export default modalSlice.reducer;
