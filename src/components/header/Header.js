import React from 'react';

export const Header = (props) => {
    const { profileName, profileTitle, profilePicture } = props;
    
    return (
        <header>
            <img src={profilePicture} alt={profileName} className="profilePicture"/>
            <div className="titleHolder">
                <h2 className="headerName">{profileName}</h2>
                <h2 className="headerTitle">{profileTitle}</h2>
            </div>
        </header>
    )
}
