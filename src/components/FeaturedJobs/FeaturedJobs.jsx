import React, { useContext } from 'react';
import { jobsDataContext } from '../../App';
import JobData from '../JobData/JobData';

const FeaturedJobs = () => {
    const jobsData = useContext(jobsDataContext)
    console.log(jobsData);
    return (
        <div className='my-20 m-6'>
            <h1 className='text-dark-01 font-extrabold text-4xl text-center'>Featured Jobs</h1>
            <p className='text-dark-03 font-medium text-[16px] text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center'>
                {
                    jobsData.map(jobData => <JobData jobData={jobData}></JobData>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;