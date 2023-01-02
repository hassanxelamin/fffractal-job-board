/* eslint-disable react/function-component-definition */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { TitleSection, EmailForm } from 'src/components';

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
      <div className="flex flex-col justify-center items-center mt-[40px] xl:mt-[83px] overflow-hidden">
        <TitleSection />
      </div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <EmailForm />
      </div>
      {/* <Jobs /> */}
    </div>
  );
};

export default Home;
