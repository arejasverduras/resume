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
  
      // Search Functionality
    const [searchTerm, setSearchTerm] = useState('')

    const searchFilter = (data) => {
      let result =  data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))

      if (result === []) {
        return data
      }
      return result;
    }

    const availableJobs = jobs.filter(job => 
      (job.description.toLowerCase().includes(searchTerm.toLowerCase()) 
        || job.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        || job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())));

        const availableCertifications = certifications.filter(cert => (
          cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.institute.toLowerCase().includes(searchTerm.toLowerCase() ||
          cert.date.toLowerCase().includes(searchTerm.toLowerCase())
        ))) 

      const contactArray = Object.entries(contactInfo);
      const contactFiltered = contactArray.filter(([key, value]) => key.includes(searchTerm));
      const filteredContacts = Object.fromEntries(contactFiltered);


  return (
    <div className="App">
      <Header 
        profileName={profileName} 
        profileTitle={profileTitle}
        profilePicture={profilePicture}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
      />
  <SideBar 
    summary={summary}
    keySkills={searchFilter(keySkills)}
    techSkills={searchFilter(techSkills)}
    contactInfo={filteredContacts}
     />
    <Content jobs={availableJobs} certifications={availableCertifications} />
    </div>

  );

  
    

}

export default App;
