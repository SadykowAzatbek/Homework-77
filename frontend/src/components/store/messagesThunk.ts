import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import axiosApi from '@/axiosApi';
import { Message } from '@/components/store/messageSlice';

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

    await axiosApi.post<Message>('/', formData);
  },
);

export const fetchGetMessages = createAsyncThunk<Message[]>(
  'get/messages',
  async () => {
    const response = await axiosApi.get<Message[]>('/');
    const items = response.data;

    if (!items) {
      return[];
    }

    return items;
  },
);