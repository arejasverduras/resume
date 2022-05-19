import React, { useEffect } from 'react';
import { Search } from '../../features/Search';

export const Header = (props) => {
    const { profileName, profileTitle, profilePicture, searchTerm, setSearchTerm, flipped, setFlipped } = props;

    const handleClick =() =>{
        setFlipped(flipped? false: true);
    }

    useEffect(()=>{
        let proPic = document.getElementsByClassName(flipped ? "profilePictureFlipped": "profilePicture")[0];
    proPic.addEventListener('click', handleClick);
    return ()=>{
        proPic.removeEventListener('click', handleClick);
    }
    },[flipped])

    return (
        <header className={flipped ? "headerFlipped": ""}>
            <img src={profilePicture} alt={profileName} className={flipped ? "profilePictureFlipped": "profilePicture"}/>
            <div className={flipped ? "titleHolderFlipped": "titleHolder"}>
                <h2 className="headerName">{profileName}</h2>
                <h2 className="headerTitle">{profileTitle}</h2>
            </div>
            <Search 
                value={searchTerm}
                setSearchTerm={setSearchTerm}/>
        </header>
    )



}
