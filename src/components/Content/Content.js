import React from 'react';
import { Certificates } from '../Certificates/Certificates';
import { JobList } from '../JobList/JobList';

export const Content = ({jobs, certifications}) => {

    
    return (
        <div className='Content'>
            <JobList 
                title={"Experience"} 
                name={"Experience"} 
                jobs={jobs} 
                type={"experience"} />
            <JobList 
                title={"Education"} 
                name={"Education"} 
                jobs={jobs} 
                type={"education"} />
            <Certificates 
                title={"Certifications"}
                name={"Certifications"}
                certifications={certifications} />
        </div>
    )
}