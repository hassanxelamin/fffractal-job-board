import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

/*
 * Styles
 */
import { GlobalStyles } from '@utils/css-mixins';
import { store } from '../redux/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
