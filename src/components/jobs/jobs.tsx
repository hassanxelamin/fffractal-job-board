import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { JobList } from '../job-list';
import { JobDetails } from '../job-details';
import { SearchBar } from 'src/components';

const getAllPosts = gql`
  query($first: Int, $last: Int, $after: String, $before: String) {
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
        hasLastPage
      }
    }
  }
`;

export function Jobs() {
  // const [values, setValues] = useState({});

  const { data, error, loading, fetchMore } = useQuery(getAllPosts, {
    variables: {
      first: 6,
    },
  });

  if (error) return <p>Oops, something went wrong {error.message}</p>;

  if (loading) {
    return <div>loading</div>;
  }

  const { endCursor, hasNextPage, hasPreviousPage, startCursor } = data.getPosts.pageInfo;

  // console.log(data)
  // const fetchJobDetails = (value) => {
  //   setValues(value);
  //   console.log(values);
  // };

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchBar />
      <JobList
        jobs={data.getPosts.edges}
        endCursor={endCursor}
        hasNextPage={hasNextPage}
        fetchMore={fetchMore}
        startCursor={startCursor}
        hasPreviousPage={hasPreviousPage}
      />
      {/* <JobDetails setNewData={fetchJobDetails} /> */}
    </div>
  );
}
