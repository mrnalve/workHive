import React from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faDollar,
  faBriefcase,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const JobDetail = () => {
  const singleJobData = useLoaderData();
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    location,
    contact_information,
  } = singleJobData;
  console.log(singleJobData);
  return (
    <div className="">
      <div>
        <h2>job detail banner: {singleJobData.company_name}</h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap w-[1100px] m-auto my-8 gap-10">
        {/* job content part starts */}
        <div className="job-content w-[70%]">
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Job Description:{" "}
            <span className="font-medium text-dark-03 inline">
              {job_description}
            </span>
          </h5>
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Job Responsibility:{" "}
            <span className="font-medium text-dark-03 inline">
              {job_responsibility}
            </span>
          </h5>
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Educational Requirements:{" "}
            <span className="font-medium text-dark-03 block">
              {educational_requirements}
            </span>
          </h5>
          <h5 className="text-[16px] font-extrabold leading-7 my-6 text-dark-01">
            Experience:{" "}
            <span className="font-medium text-dark-03 block">
              {experiences}
            </span>
          </h5>
        </div>
        {/* job content part ends */}

        {/* job details part starts */}
        <div className="job-details w-[30%] bg-custom-color py-8 pl-8 pr-2 rounded-lg">
          <h5 className="text-[16px] font-extrabold leading-7 text-dark-01 mb-4">
            Job Details
          </h5>
          <hr />
          <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
            <FontAwesomeIcon className="text-text-color mr-2" icon={faDollar} />
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
              {job_title}(Per Month)
            </span>
          </p>
          <h5 className="text-[16px] font-extrabold leading-7 text-dark-01 m-3">
            Contact Information
          </h5>
          <hr />
          <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
            <FontAwesomeIcon className="text-text-color mr-2" icon={faPhone} />{" "}
            Phone:{" "}
            <span className="font-medium text-dark-03 inline">
              {contact_information.phone}
            </span>
          </p>
          <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
            <FontAwesomeIcon
              className="text-text-color mr-2"
              icon={faEnvelope}
            />
            Email:{" "}
            <span className="font-medium text-dark-03 inline">
              {contact_information.email}
            </span>
          </p>
          <p className="text-[16px] font-bold leading-7 text-dark-02 mt-4 my-1">
            <FontAwesomeIcon
              className="text-text-color mr-2"
              icon={faLocationDot}
            />{" "}
            Address:{" "}
            <span className="font-medium text-dark-03 inline">{location}</span>
          </p>
        </div>
        {/* job details part ends */}
      </div>
    </div>
  );
};

export default JobDetail;
