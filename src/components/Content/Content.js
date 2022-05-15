import React from 'react';
import { JobList } from '../JobList/JobList';
import { Widget } from '../Widget/Widget';

export const Content = ({jobs}) => {

    
    return (
        <div className='Content'>
            <JobList title={"Experience"} jobs={jobs} type={"job"} />
            <JobList title={"Education"} jobs={jobs} type={"cert"} />
        </div>
    )
}

// return JobList components with the right content. 