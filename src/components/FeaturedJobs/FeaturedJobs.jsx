import React, { useContext, useEffect, useState } from "react";
import { jobsDataContext } from "../../App";
import JobData from "../JobData/JobData";

const FeaturedJobs = () => {
  const jobsData = useContext(jobsDataContext);
  const [showJobsData, setShowJobsData] = useState(jobsData.slice(0, 4));
  // handle see all jobs button
  const handleSeeAllJobs = () => {
    setShowJobsData(jobsData);
  };
  // handle see less jobs button
  const handleSeeLessJobs = () => {
    setShowJobsData(jobsData.slice(0, 4));
  };
  return (
    <div className="my-20 m-6">
      <h1 className="text-dark-01 font-extrabold text-4xl text-center">
        Featured Jobs
      </h1>
      <p className="text-dark-03 font-medium text-[16px] text-center my-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        {showJobsData &&
          showJobsData.map((jobData) => (
            <JobData jobData={jobData} key={jobData.id}></JobData>
          ))}
      </div>
      <div className="flex justify-center my-4">
        {showJobsData.length == 4 ? (
          <button onClick={handleSeeAllJobs} className="applied-button">
            See All Jobs
          </button>
        ) : (
          <button onClick={handleSeeLessJobs} className="applied-button">
            See Less Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
