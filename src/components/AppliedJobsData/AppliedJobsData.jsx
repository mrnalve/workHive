import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const AppliedJobsData = ({ appliedJobs }) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
    id,
  } = appliedJobs;
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center max-w-[1120px] m-auto border border-dark-06 p-4 rounded-lg my-4">
      <div className="w-40 h-40 flex items-center justify-center bg-custom-color">
        <img className="w-[40px] mb-2" src={company_logo} alt="" />
      </div>
      <div>
        <h4 className="text-dark-02 text-[24px] font-medium">{job_title}</h4>
        <p className="text-xl text-dark-03 font-semibold">{company_name}</p>
        <div className="my-2">
          <span className="text-text-color py-2 px-4 border border-text-color rounded-lg inline-block font-extrabold mr-2">
            {remote_or_onsite}
          </span>
          <span className="text-text-color py-2 px-4 border border-text-color rounded-lg inline-block font-extrabold">
            Full Time
          </span>
        </div>
        <div className="flex">
          <p className="text-dark-03 font-semibold text-[16px mr-5">
            <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
            {location}
          </p>
          <p className="text-dark-03 font-semibold text-[16px]">
            <FontAwesomeIcon icon={faDollar} /> Salary:- {salary}
          </p>
        </div>
      </div>
      <div className="ms-auto">
      <Link to={`/job/${id}`}> <button className='applied-button m-0 mt-6'>View Details</button></Link>
      </div>
    </div>
  );
};

export default AppliedJobsData;
