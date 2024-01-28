import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import FileInput from '../UI/FileInput';

const MessageForm = () => {
  return (
    <form>
      <Grid container direction="column" spacing="2">
        <Grid item xs>
          <TextField
            id="author" name="author" label="Author"
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="message" name="message" label="message"
          />
        </Grid>
        <Grid item xs>
          <FileInput
            name="image"
            label="Product image"
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