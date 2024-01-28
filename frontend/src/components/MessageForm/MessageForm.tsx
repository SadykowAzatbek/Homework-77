import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import FileInput from '../UI/FileInput';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addMessage, cleanInput, selectMessageData } from '@/components/store/messageSlice';
import { messagePost } from '@/components/store/messagesThunk';

const MessageForm = () => {
  const dispatch = useAppDispatch();

  const messageData = useAppSelector(selectMessageData);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(messagePost());
    dispatch(cleanInput());
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    dispatch(addMessage({...messageData, [name]: value}));
  };

  const fileOnChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if (files) {
      dispatch(addMessage({...messageData, [name]: files[0]}));
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container direction="column" spacing="2">
        <Grid item xs>
          <TextField
            id="author" name="author" label="Author"
            value={messageData.author}
            onChange={onChangeInputHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="message" name="message" label="message"
            value={messageData.message}
            onChange={onChangeInputHandler}
          />
        </Grid>
        <Grid item xs>
          <FileInput
            name="image"
            label="Product image"
            onChange={fileOnChangeInputHandler}
          />
        </Grid>
        <Grid item>
          <Button type="submit">Create</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessageForm;