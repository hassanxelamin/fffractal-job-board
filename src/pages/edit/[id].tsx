import React from 'react';
import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ListingForm } from 'src/components';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';
import { getAuthSession } from '../../helpers/auth/get-server-session';

const updatePosts = gql`
  mutation UpdatePost(
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
    updatePost(
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
      commitment
      company
      description
      id
      location
      remote
      title
      urlOrEmail
      website
    }
  }
`;

const EditPost = () => {
  const router = useRouter();

  const { id } = router.query;

  const [updatePost] = useMutation(updatePosts);

  return (
    <div>
      <ListingForm redirectPath="/" onSubmit={updatePost} userId={`${id}`} />
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

export default EditPost;
