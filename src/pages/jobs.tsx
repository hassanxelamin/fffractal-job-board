import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getAuthSession } from '@utils/auth/get-server-session';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { MyJobs } from '../components/my-jobs';

const getUniqueUserPosts = gql`
  query GetUniqueUserPosts($email: String!) {
    getUserPost(email: $email) {
      id
      company
      website
      title
      commitment
      location
      remote
      urlOrEmail
      description
    }
  }
`;

const Jobs = ({ sessionEmail }) => {
  const { data, loading } = useQuery(getUniqueUserPosts, {
    variables: { email: sessionEmail },
  });

  const router = useRouter();

  const refreshPage = () => {
    router.replace(router.asPath);
  };

  if (loading) return <div>loading</div>

  return (
    <div className="flex items-center justify-center">
      <MyJobs jobs={data.getUserPost} refresh={refreshPage} />
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
      sessionEmail: session.user?.email,
    },
  };
};

export default Jobs;
