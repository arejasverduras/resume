import React from 'react';
import { Widget } from '../Widget/Widget';

export const JobList = ({jobs, type, title}) => {
    const jobsFilter = jobs.filter(job => job.type === type)
    
    const contentArray = 
    <table className='jobsTable'>
{        jobsFilter.map(jobObject => 
                <>
                <tr>
                    <td style={{"width": "30%"}} className="jobPeriod">{jobObject.period}</td>
                    <td style={{"width": "70%"}}className="jobTitle">{jobObject.title}</td>
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
        <Widget title={title} name={title} content={contentArray} />
</div>)
}

