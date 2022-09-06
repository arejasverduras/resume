import React from 'react';


export const DownloadPDF = ({pdf}) => {
    if (!pdf) {
        return 
    } else {
    
    return (
        <a className="pdfButton" href={pdf} download>
            Download resume as PDF
        </a>
    )
    }
}