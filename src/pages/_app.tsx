import React from 'react';
import type { AppProps } from 'next/app';

/*
 * Styles
 */
import { createGlobalStyle } from 'styled-components';
import { Fonts, Reset, BaseStyles } from '@utils/css-mixins';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Base />
      <Component {...pageProps} />
    </>
  );
}

const Base = createGlobalStyle`
    ${Fonts}
    ${Reset}
    ${BaseStyles}
`;
