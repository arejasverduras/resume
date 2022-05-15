import React from 'react';
import { Widget } from '../Widget/Widget';

export const JobList = ({jobs, type, title}) => {
    const jobsFilter = jobs.filter(job => job.type === type)
    
    const contentArray = 
    <table>
{        jobsFilter.map(jobObject => 
                <>
                <tr>
                    <td style={{"width": "30%"}}colSpan="1" className="jobPeriod">{jobObject.period}</td>
                    <td className="jobTitle">{jobObject.title}</td>

                </tr>
                <tr>
                    <td></td><td className='jobDescription'>{jobObject.description}</td>
                </tr>
                </>
        )}
    </table>
    
    return (
    <div className='Content'>
        <Widget title={title} name={title} content={contentArray} />
</div>)
}

