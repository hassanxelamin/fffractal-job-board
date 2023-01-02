import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ListingForm } from 'src/components';
import { gql, useQuery, useMutation } from '@apollo/client';
import { getAuthSession } from '../helpers/auth/get-server-session';

const getUniqueUser = gql`
  query GetUniqueUser($email: String!) {
    getUsers(email: $email) {
      id
    }
  }
`;

const createPosts = gql`
  mutation CreatePosts(
    $company: String
    $website: String
    $title: String
    $commitment: String
    $location: String
    $remote: Boolean
    $urlOrEmail: String
    $description: String
    $userId: String
  ) {
    createPosts(
      company: $company
      website: $website
      title: $title
      commitment: $commitment
      location: $location
      remote: $remote
      urlOrEmail: $urlOrEmail
      description: $description
      userId: $userId
    ) {
      company
      website
      title
      commitment
      location
      description
      remote
      urlOrEmail
      userId
    }
  }
`;

interface JobPostProps {
  sessionEmail: string;
}

const JobPost = ({ sessionEmail }: JobPostProps) => {
  // const [user, setUser] = use
  const [addPost] = useMutation(createPosts);

  const { data, loading } = useQuery(getUniqueUser, {
    variables: { email: sessionEmail },
  });

  if (loading) {
    return (
      <div>
        <ListingForm redirectPath="/" onSubmit={addPost} userId="" />
      </div>
    );
  }

  return (
    <div>
      <ListingForm
        redirectPath="/"
        onSubmit={addPost}
        userId={data.getUsers[0].id}
      />
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

export default JobPost;
