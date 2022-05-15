import React from 'react';
import './App.css';

import { profileData } from './data';
import { Header } from './components/header/Header';
import { SideBar } from './components/SideBar/SideBar';

function App() {
  const { profileName, profileTitle, profilePicture, contactInfo, summary, keySkills, techSkills} = profileData;
  
  return (
    <div className="App">
      <Header 
        profileName={profileName} 
        profileTitle={profileTitle}
        profilePicture={profilePicture} 
      />
  <SideBar 
    summary={summary}
    keySkills={keySkills}
    techSkills={techSkills}
    contactInfo={contactInfo}
     />
    </div>
  );
}

export default App;
