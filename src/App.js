import React, {useState} from 'react';
import './App.css';

import { profileData } from './data';
import { Header } from './components/header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Content} from './components/Content/Content';

function App() {
  const { 
    jobs, 
    certifications, 
    profileName, 
    profileTitle, 
    profilePicture, 
    contactInfo, 
    summary, 
    keySkills, 
    techSkills} = profileData;
  
    const [searchTerm, setSearchTerm] = useState('')

    const availableJobs = jobs.filter(job => 
      (job.description.toLowerCase().includes(searchTerm.toLowerCase()) 
        || job.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        || job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())));

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
    <Content jobs={availableJobs} certifications={certifications} />
    </div>

  );
}

export default App;
