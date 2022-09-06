import React from 'react';
// import resume from './Michiel Roukens - React Developer - Full stack developer to be.pdf'
// import resume from './Resume.pdf'
import resume from '../../documents/Resume.pdf'


export const DownloadPDF = () => {
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