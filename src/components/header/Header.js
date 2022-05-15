import React from 'react';
import { profileData } from '../../data';

export const Header = (props) => {
    const {profileName, profileTitle } = profileData;
    
    return (
        <header>
            <img src="michiel.jpeg" alt={profileName}/>
            <h2 className="headerName">{profileName}</h2>
            <h2 className="headerTitle">{profileTitle}</h2>
        </header>
    )
}
