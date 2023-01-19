import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/settings";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    upload: null,
    loading: false,
    error: ""
};

export const uploadImage = createAsyncThunk(
    "upload/image",
    async (arg) => {
      return httpRequest(`${BASE_URL}/items/upload`, "post", arg?.payload);
    }
  );

  const uploadSlice = createSlice({
    name: "upload",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(uploadImage.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false;
        state.upload = action.payload;
        state.error = "";
      });
      builder.addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.upload = {};
        state.error = "Error, Failed to upload";
      });
    },
  });

  export default uploadSlice.reducer;