import React, { useContext } from "react";
import { appliedContext } from "../../App";
import AppliedJobsData from "../AppliedJobsData/AppliedJobsData";

const AppliedJobs = () => {
  const [appliedData, setAppliedData] = useContext(appliedContext);
  console.log(appliedData);
  return (
    <div>
      <div className="h-[250px] bg-custom-color flex items-center justify-center relative mb-10">
        <h2 className="text-dark-01 font-extrabold text-3xl">Applied Jobs</h2>
        <img
          className="absolute top-0 right-0 w-64"
          src="https://i.ibb.co/y8LkZNW/Vector-1.png"
          alt="Vector-1"
          border="0"
        ></img>
        <img
          className="absolute bottom-0 left-0 w-64"
          src="https://i.ibb.co/8MXGGPf/Vector-2.png"
          alt="Vector-2"
          border="0"
        ></img>
      </div>
      {appliedData.map((appliedJobs) => (
        <AppliedJobsData
          appliedJobs={appliedJobs}
          key={appliedJobs.id}
        ></AppliedJobsData>
      ))}
    </div>
  );
};

export default AppliedJobs;
