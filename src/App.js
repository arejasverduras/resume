import React, {useState} from 'react';
import './App.css';

import { profileData } from './data';
import { Header } from './components/header/Header';

function App() {
  const { profileName, profileTitle, profilePicture} = profileData;
  
  return (
    <div className="App">
      <Header 
        profileName={profileName} 
        profileTitle={profileTitle}
        profilePicture={profilePicture} />
    </div>
  );
}

export default App;
