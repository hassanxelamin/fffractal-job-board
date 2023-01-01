import React from 'react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { NavBar } from 'src/components';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <NavBar />
        <Component {...pageProps} />
        <Toaster />
      </ApolloProvider>
    </SessionProvider>
  );
}
