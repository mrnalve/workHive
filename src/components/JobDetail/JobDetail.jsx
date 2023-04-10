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
    <div>
      <div>
        <h2>job detail banner: {singleJobData.company_name}</h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="job-content">
          <h5>
            Job Description: <p>{job_description}</p>
          </h5>
          <h5>
            Job Responsibility: <p>{job_responsibility}</p>
          </h5>
          <h5>
            Educational Requirements: <p>{educational_requirements}</p>
          </h5>
          <h5>
            Experience: <p>{experiences}</p>
          </h5>
        </div>
        <div className="job-details">
          <h5>
            Job Detail
          </h5>
          <p>
            <FontAwesomeIcon icon={faDollar} />
            Salary:{salary}(Per Month)
          </p>
          <p><FontAwesomeIcon icon={faBriefcase} /> Job Title:{job_title}(Per Month)</p>
          <p><FontAwesomeIcon icon={faBriefcase} /> Job Title:{job_title}(Per Month)</p>
          <h5>Contact Information</h5>
          <p><FontAwesomeIcon icon={faPhone} /> Phone:{contact_information.phone}</p>
          <p><FontAwesomeIcon icon={faEnvelope} />Email:{contact_information.email}</p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Address:{location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
