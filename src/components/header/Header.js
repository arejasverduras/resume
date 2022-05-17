import React, { useEffect } from 'react';
import { Search } from '../../features/Search';

export const Header = (props) => {
    const { profileName, profileTitle, profilePicture, searchTerm, setSearchTerm, flipped, setFlipped } = props;

    let counter = 0;

    // const handleClick = () =>{
    //     console.log('click');
    //     const body = document.body;
    //     const header = document.getElementsByTagName('header')[0];
    //     let widgetsToFlip = ['contact','summary','keySkills','techSkills','mktSkills','addSkills','languages','hobbies']

    //     widgetsToFlip.forEach((widget)=>{
    //       let findWidget = document.getElementsByClassName(widget)[0];
    //     if (!flip) 
    //         {findWidget.style.backgroundColor="rgba(255, 255, 255, 0.888)";
    //      findWidget.style.color="rgb(49, 48, 48)";}
    //     else if (flip)
    //         {findWidget.style.backgroundColor="rgb(49, 48, 48)";
    //         findWidget.style.color="rgba(255, 255, 255, 0.888)";}
    //     })

    // let contentToFlip = ['Experience','Education','certifications']
    //     contentToFlip.forEach((widget)=>{
    //         let findWidget = document.getElementsByClassName(widget)[0];
    //     if (flip) 
    //         {findWidget.style.backgroundColor="rgba(255, 255, 255, 0.888)";
    //     findWidget.style.color="rgb(49, 48, 48)";}
    //     else if (!flip)
    //         {findWidget.style.backgroundColor="rgb(49, 48, 48)";
    //         findWidget.style.color="rgba(255, 255, 255, 0.888)";}
    //   })


    //     if (!flip) 
    //     {
    //         header.style.background="linear-gradient(0.25turn, #45caff, #ff1b6b)";
    //         body.style.background="linear-gradient(0.25turn, #45caff, #ff1b6b)"
    //         flip = true;
    //     } else if (flip) {
    //     header.style.background="linear-gradient(0.25turn, #ff1b6b, #45caff)";
    //     body.style.background="linear-gradient(0.25turn, #ff1b6b, #45caff)"
    //     flip = false;
    // }
    // console.log('flipAfter '+flip)
    // }

    const handleClick =() =>{
        setFlipped(flipped? false: true);
        counter +=1;
        console.log(counter);
    }

    useEffect(()=>{
        let proPic = document.getElementsByClassName("profilePicture")[0];
    proPic.addEventListener('click', handleClick);
    return ()=>{
        proPic.removeEventListener('click', handleClick);
    }
    },[flipped])


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
