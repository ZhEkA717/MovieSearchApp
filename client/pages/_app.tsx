import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { Select, MultiSelect, createTheme, MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const theme = createTheme({
  components: {
    Select: Select.extend({
      styles: {
        dropdown: {height: '224px', overflow: 'hidden'},
        options: {height: '224px'},
        option: {height: '36px'},
      }
    })
  }
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