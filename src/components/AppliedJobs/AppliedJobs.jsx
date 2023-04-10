import React, { useContext } from 'react';
import { appliedContext } from '../../App';

const AppliedJobs = () => {
    const [appliedData, setAppliedData] = useContext(appliedContext)
    console.log(appliedData);
    return (
        <div>
            <h2>Applied jobs</h2>
            {
                appliedData.map(appliedJobs => <p>{appliedJobs.company_name}</p>)
            }
        </div>
    );
};

export default AppliedJobs;