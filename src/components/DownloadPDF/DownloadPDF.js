import React from 'react';
// import resume from './Michiel Roukens - React Developer - Full stack developer to be.pdf'
import resume from './Resume.pdf'


export const DownloadPDF = ({pdf}) => {
    if (!resume) {
        return 
    } else {
    
    return (
        <a className="pdfButton" href={resume} target="_blank" rel='noreferrer'>
            Download resume as PDF
        </a>
    )
    }
}