import React from 'react';
import resume from './Michiel Roukens - React Developer - Full stack developer to be.pdf'

export const DownloadPDF = ({pdf}) => {
    if (!resume) {
        return 
    } else {
    
    return (
        <a className="pdfButton" href={resume} download>
            Download resume as PDF
        </a>
    )
    }
}