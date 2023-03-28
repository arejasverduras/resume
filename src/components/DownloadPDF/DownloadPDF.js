import React from 'react';
import styles from './DownloadPDF.module.css';
import resume from '../../documents/Michiel Roukens - React Developer - Front-end Developer.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { profileData } from '../../data';

export const DownloadPDF = () => {
    if (!resume) {
        return 
    } else {
    
    return (
        <a className={styles.link} href={profileData.pdf} target="_blank" rel='noreferrer'>
            Download as PDF<FontAwesomeIcon icon={faArrowDown}/> 
        </a>
    )
    }
}