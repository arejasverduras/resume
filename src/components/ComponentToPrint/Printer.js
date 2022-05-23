import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import {App}from '../../App';

// import { ComponentToPrint } from './ComponentToPrint';
// import { Contact } from '../Contact/Contact';

export const Printer = (props, ref) => {
  const componentRef = useRef();

  return (
    <div className="appContainer">
      <ReactToPrint
        trigger={() => <button className="printButton topButton">Print / Save as PDF</button>}
        content={() => componentRef.current}
        
      />
  <App ref={componentRef} />
  <ReactToPrint
        trigger={() => <button className="printButton bottomButton">Print / Save as PDF</button>}
        content={() => componentRef.current}
        
      />
    </div>
  );
};