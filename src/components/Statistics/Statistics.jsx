import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Statistics = () => {
    const assignmentMark = [
        { id: 1, name: "Assignment 1", mark: 60 },
        { id: 2, name: "Assignment 2", mark: 60 },
        { id: 3, name: "Assignment 3", mark: 60 },
        { id: 4, name: "Assignment 4", mark: 59 },
        { id: 5, name: "Assignment 5", mark: 60 },
        { id: 6, name: "Assignment 6", mark: 60 },
        { id: 7, name: "Assignment 7", mark: 60 },
        { id: 8, name: "Assignment 8", mark: 60 },
    ];
    const gradientOffset = () => {
        const dataMax = Math.max(...assignmentMark.map((i) => i.mark));
        const dataMin = Math.min(...assignmentMark.map((i) => i.mark));
    
        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }
    
        return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();
    return (
            <AreaChart
                width={1000}
                height={400}
                data={assignmentMark}
                margin={{
                    top: 50,
                    right: 30,
                    left: 50,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={off} stopColor="purple" stopOpacity={1} />
                        <stop offset={off} stopColor="red" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="mark" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>
    );
};

export default Statistics;
