import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

export interface Message {
  id: string;
  author: string;
  message: string;
  image: string | null;
}

const initialState: Message = {
  id: '',
  author: '',
  message: '',
  image: null,
};

export const messagesSlice = createSlice({
  name: 'message/slice',
  initialState,
  reducers: {
    addMessage: (state, {payload}: PayloadAction<Message>) => {
      state.author = payload.author;
      state.message = payload.message;
      state.image = payload.image;
    },
    cleanInput: (state) => {
      state.author = '';
      state.message = '';
      state.image = null;
    },
  },
});

export const messageReducer = messagesSlice.reducer;
export const {addMessage, cleanInput} = messagesSlice.actions;
export const selectMessageData = (state: RootState) => state.messageData;