import React from 'react';
import type { AppProps } from 'next/app';

/*
 * Styles
 */
import { GlobalStyles } from '@utils/css-mixins';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
