import React from 'react';
import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getAuthSession } from '@utils/auth/get-server-session';
import { ListingForm } from 'src/components';

// ADD TYPES FOR DATA //

const JobPost = () => {
  const addHome = (data: any) => axios.post('/api/jobs', data);

  return (
    <div>
      <ListingForm redirectPath="/" onSubmit={addHome} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getAuthSession(ctx);

  if (!session) {
    return {
      redirect: { destination: '/', permanent: false },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default JobPost;
