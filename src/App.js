import React, {useState, useEffect} from 'react';
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

    const search = (data, cat,type) => {
      let result;
        if (type === 'object'){
          const contactArray = Object.entries(data);

      if (cat.includes(searchTerm.toLowerCase())){
        result = contactArray;
    } else {
      result = contactArray.filter(([key, value]) => key.toLowerCase().includes(searchTerm.toLowerCase()));
    }
        } else if (type ==='array' ){
          if (cat.includes(searchTerm.toLowerCase())){
            result = data;
          } else {
            result =  data.filter(item =>  item.toLowerCase().includes(searchTerm.toLowerCase()))
          }
        } else if (type === 'Array of Objects'){
            if (cat === 'jobs'){
              result = jobs.filter(job => 
                (job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.type.toLowerCase().includes(searchTerm.toLowerCase()) 
                  || job.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                  || job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  job.location.toLowerCase().includes(searchTerm.toLowerCase())));
            } else if (cat ==='certifications'){
              result = certifications.filter(cert => (
                cert.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cert.institute.toLowerCase().includes(searchTerm.toLowerCase() ||
                cert.date.toLowerCase().includes(searchTerm.toLowerCase())
              ))) 
            }
        }
      return result;
    }

    // hide sections not relevant for search
    useEffect(()=>{

      // let toHide2 = document.getElementsByClassName("contact")[0]
      // console.log(toHide2)

      let widgetsToHide = ['contact','keySkills','techSkills','mktSkills','addSkills','languages','hobbies']

      widgetsToHide.forEach((widget)=>{
        let findWidget = document.getElementsByClassName(widget)[0];
        console.log(findWidget);
        if (findWidget.lastElementChild.childNodes.length === 0){
          console.log('no children!');
          findWidget.style.display='none'
        } else {
          findWidget.style.display='grid'
        }
      })


      // if (toHide2.firstChild.nextElementSibling.firstChild.childNodes.length === 0){
      //   console.log('no children!');
      //   toHide2.style.display='none'
      // } else {
      //   toHide2.style.display='grid'
      // }
    },[searchTerm])


  return (
    <div className="App">
      <Header 
        profileName={profileName} 
        profileTitle={profileTitle}
        profilePicture={profilePicture}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
      />
      <Contact contactInfo={search(contactInfo, 'contact','object')} />
      <Summary summary={summary} />
  <SideBar 
    keySkills={search(keySkills, "key skills","array")}
    techSkills={search(techSkills, "tech skills","array")}
    mktSkills={search(mktSkills, "marketing skills","array")}
    addSkills={search(addSkills, "additional skills","array")}
    languages={search(languages, "languages","array")}
    hobbies={search(hobbies, "hobbies", "array")}
     />
    <Content 
      jobs={search(jobs,'jobs','Array of Objects')} 
      certifications={search(certifications,'certifications','Array of Objects')} />
    </div>

  );

  
    

}

export default App;
