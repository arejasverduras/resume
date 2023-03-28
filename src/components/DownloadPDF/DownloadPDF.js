import React from 'react';
import styles from './DownloadPDF.module.css';
import resume from '../../documents/Michiel Roukens - React Developer - Front-end Developer.pdf'

export const DownloadPDF = () => {
    if (!resume) {
        return 
    } else {
    
    return (
        <a className={styles.link} href={resume} target="_blank" rel='noreferrer'>
            Download as PDF
        </a>
    )
    }
}