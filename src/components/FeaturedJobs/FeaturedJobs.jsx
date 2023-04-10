import React, { useContext } from 'react';
import { jobsDataContext } from '../../App';

const FeaturedJobs = () => {
    const jobsData = useContext(jobsDataContext)
    console.log(jobsData);
    return (
        <div>
            <h2>FeaturedJobs</h2>
        </div>
    );
};

export default FeaturedJobs;