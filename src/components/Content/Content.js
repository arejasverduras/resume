import React from 'react';
import { Widget } from '../Widget/Widget';

export const Content = ({jobs}) => {

    const jobsArray = 
    <table>
{        jobs.map(jobObject => 
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
            {/* Return a 'JobList' containgn multiple 'Job' components */}
            
            <Widget title={"Experience"} name="Experience" content={jobsArray} />

        </div>
    )
}

// return JobList components with the right content. 