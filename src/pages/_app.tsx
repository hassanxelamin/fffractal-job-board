import React from 'react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { NavBar } from 'src/components';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </SessionProvider>
  );
}
