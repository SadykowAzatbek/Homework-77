'use client';
import { Card, CardContent, CardHeader, CardMedia, CircularProgress, Grid, styled, Typography } from '@mui/material';
import MessageForm from '@/components/MessageForm/MessageForm';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectIsLoading, selectMessagesData } from '@/components/store/messagesSlice';
import { useEffect } from 'react';
import { fetchGetMessages } from '@/components/store/messagesThunk';
import { apiUrl } from '@/constants';

export default function Home() {
  const allMessages = useAppSelector(selectMessagesData);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUrl = async () => {
      await dispatch(fetchGetMessages());
    };

    void fetchUrl();
  }, [dispatch]);

  const ImageCardMedia = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%',
  })

  return (
    <Grid container direction="column" spacing="2">
      <Grid item>
        <Typography variant="h3">Messages</Typography>
      </Grid>
      <Grid item>
        <MessageForm />
      </Grid>
      <Grid item>
        {!isLoading ? allMessages.map((items) => (
          <Grid item xs={12} sm={12} md={6} lg={4} mb={3} mt={3} key={items.id}>
            <Card sx={{height: '100%'}}>
              <CardHeader title={items.author === '' ? 'Anonymous' : items.author}/>
              {items.image !== null ? <ImageCardMedia image={apiUrl + '/' + items.image}/> : <span></span>}
              <CardContent>
                {items.message}
              </CardContent>
            </Card>
          </Grid>
        )) : <CircularProgress />}
      </Grid>
    </Grid>
  );
}
