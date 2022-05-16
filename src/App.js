import React, {useState} from 'react';
import './App.css';

import { profileData } from './data';
import { Header } from './components/header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Content} from './components/Content/Content';
import {Contact} from './components/Contact/Contact';
import { Summary } from './components/Summary/Summary';

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
    techSkills,
  mktSkills,
addSkills,
languages,
hobbies} = profileData;
  
      // Search Functionality
    const [searchTerm, setSearchTerm] = useState('')

    const searchFilter = (data, cat) => {
      let result;

      if (cat.includes(searchTerm.toLowerCase())){
        result = data;
      } else {
        result =  data.filter(item =>  item.toLowerCase().includes(searchTerm.toLowerCase()))
      }

      return result;
    }

    const availableJobs = jobs.filter(job => 
      (job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(searchTerm.toLowerCase()) 
        || job.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        || job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())));

        const availableCertifications = certifications.filter(cert => (
          cert.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      <Contact contactInfo={filteredContacts} />
      <Summary summary={summary} />
  <SideBar 
    keySkills={searchFilter(keySkills, "key skills")}
    techSkills={searchFilter(techSkills, "tech skills")}
    mktSkills={searchFilter(mktSkills, "marketing skills")}
    addSkills={searchFilter(addSkills, "additional skills")}
    languages={searchFilter(languages, "languages")}
    hobbies={searchFilter(hobbies, "hobbies")}
     />
    <Content jobs={availableJobs} certifications={availableCertifications} />
    </div>

  );

  
    

}

export default App;
