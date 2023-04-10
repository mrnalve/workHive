import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faDollar } from '@fortawesome/free-solid-svg-icons'

const JobData = ({jobData}) => {
    const {company_logo, job_title,company_name,remote_or_onsite, location,salary} = jobData
    return (
        <div className='border border-dark-06 py-12 pl-12'>
            <img className='w-[40px] mb-2' src={company_logo} alt="" />
            <h4 className='text-dark-02 text-[24px] font-medium'>{job_title}</h4>
            <p className='text-xl text-dark-03 font-semibold'>{company_name}</p>
            <div className='my-2'>
                <span className='text-text-color py-2 px-4 border border-text-color rounded-lg inline-block font-extrabold mr-2'>{remote_or_onsite}</span>
                <span className='text-text-color py-2 px-4 border border-text-color rounded-lg inline-block font-extrabold'>Full Time</span>
            </div>
            <div className='flex'>
                <p className='text-dark-03 font-semibold text-[16px mr-5'><FontAwesomeIcon icon={faLocationArrow} />{location}</p>
                <p className='text-dark-03 font-semibold text-[16px]'><FontAwesomeIcon icon={faDollar} /> Salary:- {salary}</p>
            </div>
            <button className='applied-button m-0 mt-6'>View Details</button>
        </div>
    );
};

export default JobData;