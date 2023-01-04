/* eslint-disable react/function-component-definition */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { TitleSection, EmailForm, SearchBar, Jobs } from 'src/components';

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
      <div className="flex items-center justify-center">
        <SearchBar />
      </div>
      <div>
        <Jobs />
      </div>
    </div>
  );
};

export default Home;
