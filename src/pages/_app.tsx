import React from 'react';
import type { AppProps } from 'next/app';
import { store } from '../redux/store'
import { Provider } from 'react-redux'

/*
 * Styles
 */
import { GlobalStyles } from '@utils/css-mixins';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
