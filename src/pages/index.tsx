/* eslint-disable react/function-component-definition */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { PrismaClient } from '@prisma/client';
import { EmailForm, SearchBar, Jobs } from 'src/components';

const prisma = new PrismaClient();

const Home: NextPage = ({ posts = [] }) => {
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
      <div>
        <EmailForm />
        {/* <TitleSection /> */}
        <SearchBar />
        <Jobs jobs={posts} />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const posts = await prisma.post.findMany();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
