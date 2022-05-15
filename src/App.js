import React, {useState} from 'react';
import './App.css';

import { profileData } from './data';
import { Header } from './components/header/Header';

function App() {
  const { profilePicture } = profileData;
  

  
  
  return (
    <div className="App">
      <Header img={profilePicture}/>
    </div>
  );
}

export default App;
