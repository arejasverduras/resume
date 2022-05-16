import React, { useEffect } from 'react';
import { Search } from '../../features/Search';

export const Header = (props) => {
    const { profileName, profileTitle, profilePicture, searchTerm, setSearchTerm } = props;
    
    const handleClick = () =>{
        console.log('click');
        let bg = document.getElementsByTagName('header')[0];
        console.log(bg);
        bg.style.backgroundColor="black";
    }

    useEffect(()=>{
        let proPic = document.getElementsByClassName("profilePicture")[0];
    proPic.addEventListener('click', handleClick);
    },[])


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
