import React from 'react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

/*
 * Styles
 */
import { GlobalStyles } from '@utils/css-mixins';

/*
 * Utils
 */
import { SessionProvider as AuthProvider } from 'next-auth/react';

/*
 * Global Components
 */
import { NavBar } from '@features/ui';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <AuthProvider session={session}>
        <GlobalStyles />
        <NavBar />
        <Component {...pageProps} />
      </AuthProvider>

      <Toaster />
    </>
  );
}
