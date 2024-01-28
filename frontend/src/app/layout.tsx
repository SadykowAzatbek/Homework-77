'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline/>
          <html lang="en">
            <body>
              {children}
            </body>
          </html>
        </Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
