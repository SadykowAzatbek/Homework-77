'use client';
import { Grid, Typography } from '@mui/material';
import MessageForm from '@/components/MessageForm/MessageForm';

export default function Home() {
  return (
    <Grid container direction="column" spacing="2">
      <Grid item>
        <Typography variant="h3">Messages</Typography>
      </Grid>
      <Grid item>
        <MessageForm />
      </Grid>
    </Grid>
  );
}
