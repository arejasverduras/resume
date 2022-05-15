import React from 'react';
import { Search } from '../../features/Search';

export const Header = (props) => {
    const { profileName, profileTitle, profilePicture, searchTerm, setSearchTerm } = props;
    
    return (
        <header>
            <img src={profilePicture} alt={profileName} className="profilePicture"/>
            <div className="titleHolder">
                <h2 className="headerName">{profileName}</h2>
                <h2 className="headerTitle">{profileTitle}</h2>
            </div>
            <Search 
                value={searchTerm}
                setSearchTerm={setSearchTerm}/>
        </header>
    )
}
