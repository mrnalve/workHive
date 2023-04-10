import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faDollar,
  faBriefcase,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { appliedContext } from "../../App";
import { addToDb } from "../../utilities/fakeDB";

const JobDetail = () => {
  const { id } = useParams();
  const AllJobsData = useLoaderData();
  const [jobsData, setJobsData] = useState({});
  useEffect(()=>{
    const singleJobData = AllJobsData?.find(singleJobData => singleJobData.id == id)
    setJobsData(singleJobData)
  },[id])
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    location,
    contact_information,
  } = jobsData;

  // handle applied job button
  const [appliedData, setAppliedData] = useContext(appliedContext)
  const handleAppliedJobs =  (jobsData)=>{
    let newAppliedJobData= []
    const exist = appliedData.find(jobData => jobData.id == jobsData.id)
    if (!exist) {
      newAppliedJobData=[...appliedData, jobsData]
    }else{
      const rest = appliedData.filter(existingJobData => existingJobData.id !== jobsData.id)
      newAppliedJobData = [...rest, exist]
    }
    setAppliedData(newAppliedJobData)
    addToDb(jobsData)
  }
  return (
    <div className="">
      <div>
        <h2>job detail banner: {jobsData.company_name}</h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap w-[1100px] m-auto my-8 gap-10">
        {/* job content part starts */}
        <div className="job-content w-[70%]">
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Job Description:
            <span className="font-medium text-dark-03 inline">
              {job_description}
            </span>
          </h5>
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Job Responsibility:
            <span className="font-medium text-dark-03 inline">
              {job_responsibility}
            </span>
          </h5>
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Educational Requirements:
            <span className="font-medium text-dark-03 block">
              {educational_requirements}
            </span>
          </h5>
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Experience:
            <span className="font-medium text-dark-03 block">
              {experiences}
            </span>
          </h5>
        </div>
        {/* job content part ends */}

        {/* job details part starts */}
        <div className="job-details w-[30%]">
          <div className=" bg-custom-color py-8 pl-8 pr-2 rounded-lg">
            <h5 className="text-[16px] font-extrabold leading-7 text-dark-01 mb-4">
              Job Details
            </h5>
            <hr />
            <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
              <FontAwesomeIcon
                className="text-text-color mr-2"
                icon={faDollar}
              />
              Salary{" "}
              <span className="font-medium text-dark-03 inline">
                :{salary}(Per Month)
              </span>
            </p>
            <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
              <FontAwesomeIcon
                className="text-text-color mr-2"
                icon={faBriefcase}
              />
              Job Title:{" "}
              <span className="font-medium text-dark-03 inline">
                {job_title}
              </span>
            </p>
            <h5 className="text-[16px] font-extrabold leading-7 text-dark-01 my-3">
              Contact Information
            </h5>
            <hr />
            <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
              <FontAwesomeIcon
                className="text-text-color mr-2"
                icon={faPhone}
              />{" "}
              Phone:{" "}
              <span className="font-medium text-dark-03 inline">
                {contact_information && contact_information.phone}
              </span>
            </p>
            <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
              <FontAwesomeIcon
                className="text-text-color mr-2"
                icon={faEnvelope}
              />
              Email:{" "}
              <span className="font-medium text-dark-03 inline">
                {contact_information && contact_information.email }
              </span>
            </p>
            <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
              <FontAwesomeIcon
                className="text-text-color mr-2"
                icon={faLocationDot}
              />
              Address:
              <span className="font-medium text-dark-03 inline">
                {location}
              </span>
            </p>
          </div>
          <button onClick={()=>handleAppliedJobs(jobsData)} className="applied-button w-full m-0 mt-5">Apply Now</button>
        </div>
        {/* job details part ends */}
      </div>
    </div>
  );
};

export default JobDetail;
