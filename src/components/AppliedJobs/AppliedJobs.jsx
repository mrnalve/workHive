import React, { useContext, useEffect, useState } from "react";
import { appliedContext } from "../../App";
import AppliedJobsData from "../AppliedJobsData/AppliedJobsData";

const AppliedJobs = () => {
  const [appliedData, setAppliedData] = useContext(appliedContext);
  const [selectedOption, setSelectedOption] = useState("allJobs");
  // handle filter options
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  // state declare for check job is remote or onsite
  const [appliedJobsData, setAppliedJobsData] = useState(appliedData)
  useEffect(() => {
    if (selectedOption !== "allJobs") {
      const filteredJobs = appliedData.filter(
        (job) => job.remote_or_onsite === selectedOption
      );
      setAppliedJobsData(filteredJobs);
    } else {
      setAppliedJobsData(appliedData);
    }
  }, [appliedData, selectedOption]);
  
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
      <div className="flex justify-end max-w-[1120px] mx-auto">
      <select
        className="px-1 rounded-lg py-2 outline-none bg-slate-100 text-xl"
        name="cars"
        id="select"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="allJobs">-Filter By-</option>
        <option className="countryOption" value="Onsite">Onsite</option>
        <option className="countryOption" value="Remote">Remote</option>
      </select>
    </div>
      {appliedJobsData.map((appliedJobs) => (
        <AppliedJobsData
          appliedJobs={appliedJobs}
          key={appliedJobs.id}
        ></AppliedJobsData>
      ))}
    </div>
  );
};

export default AppliedJobs;
