/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import uuid from 'react-uuid';
import { gql, useLazyQuery } from '@apollo/client';

const getUniqueUserPosts = gql`
  query GetSinglePost($postId: String) {
    getSinglePost(postId: $postId) {
      id
      company
      website
      title
      commitment
      location
      remote
      urlOrEmail
      description
      userId
    }
  }
`;

interface JobsProps {
  jobs: [];
  fetchMore: (variable: {}) => {};
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export function JobList({
  jobs,
  fetchMore,
  endCursor,
  hasNextPage,
  hasPreviousPage,
  startCursor,
}: JobsProps) {
  const [getSingle, { data }] = useLazyQuery(getUniqueUserPosts);

  return (
    <div
      className="h-[791px] w-[1120px] flex justify-between
               border-[3px] border-solid border-black rounded-[10px]"
    >
      <table className="w-full h-[112px] border-solid border-black">
        {jobs &&
          jobs.map((job) => {
            const { id, node } = job;
            const { title, company, location } = node;
            return (
              <tbody
                key={uuid()}
                className="h-[113px] border-b-[3px] border-solid border-black hover:opacity-50 cursor-pointer"
                onClick={() => {
                  getSingle({ variables: { postId: id } });
                }}
              >
                <tr className="relative h-full">
                  <td>
                    <div>
                      <div className="absolute top-[21px] left-[12px] w-[46px] h-[46px] border-[1px] border-solid border-black rounded-[5px]" />
                      <div>
                        <h2 className="absolute top-[1.7rem] left-[7.4rem] text-[1.6rem] font-semibold">
                          {title}
                        </h2>
                        <h3 className="absolute top-[45px] left-[74px] text-[16px]">
                          {company}
                        </h3>
                        <p className="absolute top-[79px] left-[74px] text-[16px] text-[#6A6A6A]">
                          $180k - 250k
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="absolute top-[17px] right-[16px] text-[16px]">
                      {location}
                    </p>
                  </td>

                  <td>
                    <div>
                      <p className="absolute bottom-[14px] right-[16px] text-[16px]">
                        3h
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        {hasNextPage ? (
          <button
            type="button"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
                  if (!fetchMoreResult) return prevResult;
                  fetchMoreResult.getPosts.edges = [
                    ...fetchMoreResult.getPosts.edges,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
          >
            forward
          </button>
        ) : null}

        {hasPreviousPage ? (
          <button
            type="button"
            onClick={() => {
              fetchMore({
                variables: {
                  first: undefined,
                  after: undefined,
                  last: -6,
                  before: startCursor,
                },
                updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
                  if (!fetchMoreResult) return prevResult;
                  fetchMoreResult.getPosts.edges = [
                    ...fetchMoreResult.getPosts.edges,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
          >
            back
          </button>
        ) : null}
      </table>
      {data ? (
        <div className="bg-[#deb887] w-full">
          <h1>{data.getSinglePost[0].company}</h1>
        </div>
      ) : (
        <div className="bg-[#deb887] w-full" />
      )}
    </div>
  );
}