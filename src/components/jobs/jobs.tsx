import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { JobList } from '../job-list';
// import { JobDetails } from '../job-details';

const getAllPosts = gql`
  query ($first: Int, $last: Int, $after: String, $before: String) {
    getPosts(first: $first, last: $last, after: $after, before: $before) {
      edges {
        cursor
        node {
          commitment
          company
          description
          id
          location
          remote
          title
          urlOrEmail
          userId
          website
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export function Jobs() {

  try {
    const { data, error, loading, fetchMore } = useQuery(getAllPosts, {
      variables: {
        first: 6,
      },
    }); 
  } catch (error) {
    console.log(error)
  }

  if (error) return <p>Oops, something went wrong {error.stack}</p>;

  if (loading) {
    return <div>loading</div>;
  }

  const { endCursor, hasNextPage, hasPreviousPage, startCursor } =
    data.getPosts.pageInfo;

  return (
    <div className="flex flex-col items-center justify-center mb-[108px]">
      <JobList
        jobs={data.getPosts.edges}
        endCursor={endCursor}
        hasNextPage={hasNextPage}
        fetchMore={fetchMore}
        startCursor={startCursor}
        hasPreviousPage={hasPreviousPage}
      />
      {/* <JobDetails /> */}
    </div>
  );
}
