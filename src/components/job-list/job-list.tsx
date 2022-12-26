import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import useSWR from 'swr';

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

export function JobList({ jobs, setNewData }) {
  const [data, setData] = useState({});

  const getSingle = async (id) => {
    try {
      const res = await axios.post('/api/details', { data: { id } });
      setData(res.data);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div
      className="h-[791px] w-[1120px] flex justify-between
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
                onClick={() => {
                  getSingle(id);
                }}
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
                        <p className="absolute top-[79px] left-[74px] text-[16px] text-[#6A6A6A]">
                          $180k - 250k
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="absolute top-[17px] right-[16px] text-[16px]">
                      {job.location}
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
      </table>
      <div className="bg-[#deb887] w-full">
        <h1>{data.company}</h1>
      </div>
    </div>
  );
}
