import React, {useState} from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([{
    type: 'job',
    period: '2021',
    company: 'Arejas',
    location: 'The Hague, Netherlands'
  }]);
  
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
