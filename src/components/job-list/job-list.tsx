/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import uuid from 'react-uuid';
// import { gql, useLazyQuery } from '@apollo/client';

// const getUniqueUserPosts = gql`
//   query GetSinglePost($postId: String) {
//     getSinglePost(postId: $postId) {
//       id
//       company
//       website
//       title
//       commitment
//       location
//       remote
//       urlOrEmail
//       description
//       userId
//     }
//   }
// `;

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
  // const [getSingle, { data }] = useLazyQuery(getUniqueUserPosts);
  const [count, setCount] = useState(1);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div
      className="font-satoshi h-[791px] w-[353px] sm:w-[550px] md:w-[700px] lg:w-[975px] xl:w-[1120px] flex justify-between
               border-[3px] border-solid border-black rounded-[10px] bg-white"
    >
      <table className="w-full h-[112px] border-solid border-black">
        {jobs &&
          jobs.map((job) => {
            const { node } = job;
            const { title, company, location } = node;
            return (
              <tbody
                key={uuid()}
                className="h-[113px] border-b-[3px] border-solid border-black hover:opacity-50 cursor-pointer"
                // onClick={() => {
                //   getSingle({ variables: { postId: id } });
                // }}
              >
                <tr className="relative h-full">
                  <td>
                    <div>
                      <div className="absolute top-[21px] left-[12px] w-[46px] h-[46px] border-[1px] border-solid border-black rounded-[5px]" />
                      <div>
                        <h2 className="absolute top-[1.7rem] left-[7.4rem] text-[10px] sm:text-[13px] md:text-[16px] font-semibold">
                          {title}
                        </h2>
                        <h3 className="absolute top-[45px] left-[74px] text-[10px] sm:text-[13px] md:text-[16px]">
                          {company}
                        </h3>
                        <p className="absolute top-[79px] left-[74px] text-[10px] sm:text-[13px] md:text-[16px] text-[#6A6A6A]">
                          $180k - 250k
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="absolute top-[17px] right-[16px] text-[10px] sm:text-[13px] md:text-[16px]">
                      {location}
                    </p>
                  </td>

                  <td>
                    <div>
                      <p className="absolute bottom-[14px] right-[16px] text-[10px] sm:text-[13px] md:text-[16px]">
                        3h
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        <div className="flex items-center justify-center h-[112px] ">
          <div className="flex">
            {hasPreviousPage ? (
              <button
                type="button"
                className="text-[10px] sm:text-[13px] md:text-[16px] border-solid border-[1px] border-black w-[65px] h-[37px] border-r-0 rounded-l-2xl"
                onClick={() => {
                  countDown();
                  fetchMore({
                    variables: {
                      first: undefined,
                      after: undefined,
                      last: -6,
                      before: startCursor,
                    },
                    updateQuery: (
                      prevResult: any,
                      { fetchMoreResult }: any
                    ) => {
                      if (!fetchMoreResult) return prevResult;
                      fetchMoreResult.getPosts.edges = [
                        ...fetchMoreResult.getPosts.edges,
                      ];
                      return fetchMoreResult;
                    },
                  });
                }}
              >
                Prev
              </button>
            ) : (
              <button
                type="button"
                className="text-[10px] sm:text-[13px] md:text-[16px] opacity-50 border-solid border-[1px] border-black w-[65px] h-[37px] border-r-0 rounded-l-2xl"
                disabled
                onClick={() => {
                  countDown();
                  fetchMore({
                    variables: {
                      first: undefined,
                      after: undefined,
                      last: -6,
                      before: startCursor,
                    },
                    updateQuery: (
                      prevResult: any,
                      { fetchMoreResult }: any
                    ) => {
                      if (!fetchMoreResult) return prevResult;
                      fetchMoreResult.getPosts.edges = [
                        ...fetchMoreResult.getPosts.edges,
                      ];
                      return fetchMoreResult;
                    },
                  });
                }}
              >
                Prev
              </button>
            )}
            <div className="flex items-center justify-center text-[10px] sm:text-[13px] md:text-[16px] font-bold border-solid border-[1px] border-black w-[65px] h-[37px]">
              <div>{count}</div>
            </div>
            {hasNextPage ? (
              <div>
                <button
                  className="text-[10px] sm:text-[13px] md:text-[16px] border-solid border-[1px] border-black w-[65px] h-[37px] border-l-0 rounded-r-2xl"
                  type="button"
                  onClick={() => {
                    countUp();
                    fetchMore({
                      variables: { after: endCursor },
                      updateQuery: (
                        prevResult: any,
                        { fetchMoreResult }: any
                      ) => {
                        if (!fetchMoreResult) return prevResult;
                        fetchMoreResult.getPosts.edges = [
                          ...fetchMoreResult.getPosts.edges,
                        ];
                        return fetchMoreResult;
                      },
                    });
                  }}
                >
                  Next
                </button>
              </div>
            ) : (
              <button
                className="opacity-50 text-[10px] sm:text-[13px] md:text-[16px] border-solid border-[1px] border-black w-[65px] h-[37px] border-l-0 rounded-r-2xl"
                type="button"
                disabled
                onClick={() => {
                  countUp();
                  fetchMore({
                    variables: { after: endCursor },
                    updateQuery: (
                      prevResult: any,
                      { fetchMoreResult }: any
                    ) => {
                      if (!fetchMoreResult) return prevResult;
                      fetchMoreResult.getPosts.edges = [
                        ...fetchMoreResult.getPosts.edges,
                      ];
                      return fetchMoreResult;
                    },
                  });
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </table>
      {/* {data ? (
        <div className="bg-[#deb887] w-full">
          <h1>{data.getSinglePost[0].company}</h1>
        </div>
      ) : (
        <div className="bg-[#deb887] w-full" />
      )} */}
    </div>
  );
}
