import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import axiosApi from '@/axiosApi';

export const messagePost = createAsyncThunk<void, undefined, {state: RootState}>(
  'message/post',
  async (_, ThunkAPI) => {
    const messageData = ThunkAPI.getState().messageData;

    const formData = new FormData();
    formData.append('author', messageData.author);
    formData.append('message', messageData.message);

    if (messageData.image) {
      formData.append('image', messageData.image);
    }

    await axiosApi.post('/', formData);
  },
);