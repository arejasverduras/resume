import React from 'react';
import { Certificates } from '../Certificates/Certificates';
import { JobList } from '../JobList/JobList';

export const Content = ({jobs, certifications, flipped}) => {

    
    return (
        <div className='Content'>
            <JobList 
                title={"Experience"} 
                name={flipped? "ExperienceFlipped": "Experience"} 
                jobs={jobs} 
                type={"experience"}
                flipped={flipped} />
            <JobList 
                title={"Education"} 
                name={flipped? "EducationFlipped": "Education"} 
                jobs={jobs} 
                type={"education"}
                flipped={flipped} />
            {/* <Certificates 
                title={"Certifications"}
                name={flipped? "certificationsFlipped": "certifications"}
                certifications={certifications}
                flipped={flipped} /> */}
        </div>
    )
}