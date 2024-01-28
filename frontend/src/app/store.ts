import {configureStore} from '@reduxjs/toolkit';
import { messagesReducer } from '@/components/store/messageSlice';

export const store = configureStore({
  reducer: {
    messageData: messagesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;