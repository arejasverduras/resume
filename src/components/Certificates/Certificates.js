import React from 'react';
import { Widget } from '../Widget/Widget';

export const Certificates = ({jobs, title, certifications}) => {
    

    const certificateList = 
            certifications.map(cert => 
        <li id="certItem">
            <b>{cert.title} </b>
                 | {cert.description} | {cert.institute} | 
            <span style={{"fontWeight": 300, "color": "grey"}}> {cert.date}</span>
        </li>

)
    return (
        <Widget 
            title={title}
            name={certifications}
            content={certificateList}
        />
     )
}