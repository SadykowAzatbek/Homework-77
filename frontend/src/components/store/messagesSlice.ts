import { Message } from '@/components/store/messageSlice';
import { createSlice } from '@reduxjs/toolkit';
import { fetchGetMessages } from '@/components/store/messagesThunk';
import { RootState } from '@/app/store';

export interface Messages {
  messages: Message[];
  isLoading: boolean;
}

const initialState: Messages = {
  messages: [],
  isLoading: false,
};

export const messagesSlice = createSlice({
  name: 'messages/slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetMessages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetMessages.fulfilled, (state, {payload: items}) => {
      state.isLoading = false;
      state.messages = items;
    });
    builder.addCase(fetchGetMessages.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const messagesReducer = messagesSlice.reducer;
export const selectMessagesData = (state: RootState) => state.messagesData.messages;
export const selectIsLoading = (state: RootState) => state.messagesData.isLoading;