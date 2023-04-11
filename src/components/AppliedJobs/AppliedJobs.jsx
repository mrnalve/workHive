import React, { useContext } from 'react';
import { appliedContext } from '../../App';
import AppliedJobsData from '../AppliedJobsData/AppliedJobsData';

const AppliedJobs = () => {
    const [appliedData, setAppliedData] = useContext(appliedContext)
    console.log(appliedData);
    return (
        <div>
            <h2>banner</h2>
            {
                appliedData.map(appliedJobs => <AppliedJobsData appliedJobs={appliedJobs} key={appliedJobs.id}></AppliedJobsData>)
            }
        </div>
    );
};

export default AppliedJobs;