import React from 'react';
import './App.css';

import { profileData } from './data';
import { Header } from './components/header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Content} from './components/Content/Content';

function App() {
  const { jobs, certifications, profileName, profileTitle, profilePicture, contactInfo, summary, keySkills, techSkills} = profileData;
  
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
    <Content jobs={jobs} certifications={certifications} />
    </div>

  );
}

export default App;
