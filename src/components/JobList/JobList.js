import React from 'react';
import { Widget } from '../Widget/Widget';

export const JobList = ({jobs, type, title, name, flipped}) => {
    const jobsFilter = jobs.filter(job => job.type === type)
    
    const contentArray = 
    <table className='jobsTable'>
{        jobsFilter.map(jobObject => 
                <>
                <tr>
                    <td className="jobPeriod">{jobObject.period}</td>
                    <td className="jobTitle">{jobObject.title}</td>
                </tr>
                <tr>
                <td className='jobCompany'>{jobObject.company}<br/>{jobObject.location}</td><td colSpan="1" className='jobDescription'>{jobObject.description}</td>
                </tr>
                <tr>
                    <td></td><td></td>
                </tr>
                
                </>
        )}
    </table>
    
    return (
    <div className='Content'>
        <Widget 
            title={title} 
            name={name} 
            content={contentArray}
            flipped={flipped}
            />
</div>)
}

