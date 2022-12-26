import React, { useState } from 'react';
import { JobList } from '../job-list';
import { JobDetails } from '../job-details';

export function Jobs({ jobs }) {
  const [data, setData] = useState({});

  const fetchJobDetails = (value) => {
    setData(value);
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center">
        <JobList jobs={jobs} />
        {/* <JobDetails setNewData={fetchJobDetails} /> */}
    </div>
  );
}
