/* eslint-disable react/function-component-definition */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
// import { EmailForm, Jobs } from 'src/components';

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
      {/* <div> */}
      {/* <EmailForm /> */}
      {/* <TitleSection /> */}
      {/* <Jobs /> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
