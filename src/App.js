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



      const contactArray = Object.entries(contactInfo);
      const contactFiltered = contactArray.filter(([key, value]) => key.includes(searchTerm));
      const filteredContacts = Object.fromEntries(contactFiltered);
  //     const contactTable = 
  //     <table>
  // {        contactArray.map(([key, value]) => 
  //                 <tr>
  //                     <td style={{"width": "30%"}}colSpan="1" className="contactKey">{key}</td>
  //                     <td className="contactValue">{value}</td>
  //                 </tr>              
  //         )}
  //     </table>

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
    <Content jobs={availableJobs} certifications={certifications} />
    </div>

  );
}

export default App;
