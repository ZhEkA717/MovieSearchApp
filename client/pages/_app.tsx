import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  );
}