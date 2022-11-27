/* eslint-disable react/function-component-definition */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar } from '@features/ui';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FFFRACTAL</title>
        <meta
          name="description"
          content="Job Board for Creative Technologist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  );
};

export default Home;
