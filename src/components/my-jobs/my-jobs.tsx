import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import Link from 'next/link';
import { gql, useQuery, useMutation } from '@apollo/client';

interface FormValues {
  company: string;
  website: string;
  title: string;
  commitment: string;
  location: string;
  remote: boolean;
  urlOrEmail: string;
  description: string;
}

const deletePosts = gql`
  mutation ($postId: String) {
    deletePost(postId: $postId) {
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

export function MyJobs({ jobs, refresh }) {
  const [deleteSinglePost] = useMutation(deletePosts);

  return (
    <div
      className="h-[791px] w-[1120px] flex
                 border-[3px] border-solid border-black rounded-[10px]"
    >
      <table className="w-full h-[112px] border-solid border-black">
        {jobs &&
          jobs.map((job) => {
            const { id } = job;
            return (
              <tbody
                key={uuid()}
                className="h-[113px] border-b-[3px] border-solid border-black hover:opacity-50 cursor-pointer"
              >
                <tr className="relative h-full">
                  <td>
                    <div>
                      <div className="absolute top-[21px] left-[12px] w-[46px] h-[46px] border-[1px] border-solid border-black rounded-[5px]" />
                      <div>
                        <h2 className="absolute top-[1.7rem] left-[7.4rem] text-[1.6rem] font-semibold">
                          {job.title}
                        </h2>
                        <h3 className="absolute top-[45px] left-[74px] text-[16px]">
                          {job.company}
                        </h3>
                      </div>
                    </div>
                  </td>

                  <td>
                    <Link
                      href={{
                        pathname: '/edit/[id]',
                        query: {
                          id,
                        },
                      }}
                      as={`edit/${id}`}
                      passHref
                      legacyBehavior
                      className="absolute top-[17px] right-[16px] text-[16px]"
                    >
                      <a>edit</a>
                    </Link>
                  </td>

                  <td>
                    <div>
                      <p
                        className="absolute bottom-[14px] right-[16px] text-[16px]"
                        onClick={() => {
                          deleteSinglePost({ variables: { postId: id } });
                        }}
                      >
                        x
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
