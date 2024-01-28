import {configureStore} from '@reduxjs/toolkit';
import { messageReducer } from '@/components/store/messageSlice';
import { messagesReducer } from '@/components/store/messagesSlice';

export const store = configureStore({
  reducer: {
    messageData: messageReducer,
    messagesData: messagesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;