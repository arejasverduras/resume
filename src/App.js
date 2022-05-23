import React, {useState, useEffect} from 'react';
import './App.css';

import { profileData } from './data';
import { Header } from './components/header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Content} from './components/Content/Content';
import {Contact} from './components/Contact/Contact';
import { Summary } from './components/Summary/Summary';
import { ShowSearchTerm} from './components/ShowSearchTerm/ShowSearchTerm';

export const App = React.forwardRef((props, ref) => {
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

  // Flip 
  const [flipped, setFlipped] = useState('');

  const body = document.body;
  if (flipped) {
    body.style.background="linear-gradient(0.25turn, #45caff, #ff1b6b)"
  }  else {
    body.style.background="linear-gradient(0.25turn, #ff1b6b, #45caff)"
  }

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
        } else if (type === 'string') {
          if (cat.includes(searchTerm.toLowerCase())){
            result = data;
          } else 
          if (data.toLowerCase().includes(searchTerm.toLowerCase())) {
            result = data;
          } else {
            // result = `You searched for: "${searchTerm}"`;
            result = ''

          }
        } else if (type === 'jsx') {
          if (cat.includes(searchTerm.toLowerCase())){
            result = data;
          } else if (data){
            result =''
          }
        }
      return result;
    }

    // hide sections not relevant for search
    useEffect(()=>{

      let widgetsToHide = flipped?
         ['contact','summary','ExperienceFlipped','EducationFlipped','certificationsFlipped','keySkills','techSkills','mktSkills','addSkills','languages','hobbies'] 
         :['contact','summary','Experience','Education','certifications','keySkills','techSkills','mktSkills','addSkills','languages','hobbies'];

      widgetsToHide.forEach((widget)=>{
        let findWidget = document.getElementsByClassName(widget)[0];

        let toTest;
        if (widget === 'contact' || 
          widget === 'Experience' || 
          widget === 'ExperienceFlipped' ||
          widget === 'Education' ||
          widget === 'EducationFlipped') 
          {
          toTest = findWidget.lastElementChild.firstChild.childNodes;
        } else {
          toTest = findWidget.lastElementChild.childNodes;
        }

        if (toTest.length === 0){
          
          findWidget.style.display="none";
        } else {
          findWidget.style.display='grid';
        }
      })

    },[searchTerm, flipped])


    //Show / Hide ShowSearchTerm

    // useEffect(()=>{
    //   let widgets = document.getElementsByClassName('Widget');

    //   let showSearchTerm = document.getElementsByClassName('ShowSearchTerm')[0];

    //   let widgetsEntries = Object.entries(widgets);
    //   console.log(widgetsEntries);

    //   for (let x = 0; x < widgetsEntries.length;x++){
    //     let displayValue = Object.values(widgets[x].style.display).join('');
    //     console.log(displayValue);
        
    //     if (displayValue === 'none') {
    //       console.log('display none: ' + displayValue)
    //       showSearchTerm.style.display="grid"
    //        console.log(showSearchTerm.style.display);
    //     } else {
    //       console.log('display other: '+ displayValue);
    //       showSearchTerm.style.display="none";
    //       console.log('stdisplayvalue: '+showSearchTerm.style.display);
    //     }
    //   }

    //     // let displayValue = Object.values(widgets[0].style.display).join('');
    //     // console.log(displayValue);
    //     // if (displayValue === 'none') {
    //     //   console.log('display none: ' + displayValue)
    //     //   showSearchTerm.style.display="grid"
    //     //    console.log(showSearchTerm.style.display);
    //     // } else {
    //     //   console.log('display other: '+ displayValue);
    //     //   showSearchTerm.style.display="none"
    //     //   console.log(showSearchTerm.style.display);
    //     // }



      


    // //  if (displayValue === 'none') {
    // //    console.log('display none: ' + displayValue)
    // //    showSearchTerm.style.display="grid"
    // //     console.log(showSearchTerm.style.display);
    // //  } else {
    // //    console.log('display other: '+ displayValue);
    // //    showSearchTerm.style.display="none"
    // //    console.log(showSearchTerm.style.display);
    // //  }


    // },[searchTerm])

    // Show / Hide ShowSearchTerm based on searchTerm

    useEffect(()=>{
      let show = document.getElementsByClassName('ShowSearchTerm')[0];
      if (searchTerm === ''){
        show.style.display="none";
      } else {
        show.style.display="grid";
      }
    
    },[searchTerm])

  return (
    <div ref={ref} className="App">
      <Header 
        profileName={profileName} 
        profileTitle={profileTitle}
        profilePicture={profilePicture}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        flipped={flipped}
        setFlipped={setFlipped}
      />
      <Contact 
        contactInfo={search(contactInfo, 'contact','object')}
        flipped={flipped}
         />
      <Summary 
        summary={search(summary, "summary objective michiel roukens about front-end frontend back-end backend front back end full stack remote hybrid junior developer codecademy startup","jsx")}
        flipped={flipped} />
      <SideBar 
        keySkills={search(keySkills, "key skills","array")}
        techSkills={search(techSkills, "tech skills","array")}
        mktSkills={search(mktSkills, "marketing skills","array")}
        addSkills={search(addSkills, "additional skills","array")}
        languages={search(languages, "languages","array")}
        hobbies={search(hobbies, "hobbies", "array")}
        flipped={flipped}
        />
      <Content 
        jobs={search(jobs,'jobs','Array of Objects')} 
        certifications={search(certifications,'certifications','Array of Objects')}
        flipped={flipped} />
      <ShowSearchTerm 
        searchTerm={searchTerm}
        flipped={flipped} />
    </div>
  );
});
