import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import {App}from '../../App';

// import { ComponentToPrint } from './ComponentToPrint';
// import { Contact } from '../Contact/Contact';

export const Printer = (props, ref) => {
  const componentRef = useRef();

  const centerOnPage = () => {
    let toStyle = document.getElementsByClassName('App')[0];
    toStyle.style.fontSize="1.2rem"
  }

  const rePosition = () =>{
    let toReStyle = document.getElementsByClassName('App')[0];
    toReStyle.style.fontSize="1em"
  }

  return (
    <div className="appContainer">
      <ReactToPrint
        onBeforeGetContent={centerOnPage}
        onAfterPrint={rePosition}
        trigger={() => <button className="printButton topButton">Print / Save as PDF</button>}
        content={() => componentRef.current}
        
      />
  <App ref={componentRef} />
  <ReactToPrint 
        onBeforeGetContent={centerOnPage}
        onAfterPrint={rePosition}
        trigger={() => <button className="printButton bottomButton">Print / Save as PDF</button>}
        content={() => componentRef.current}    
      />
    </div>
  );
};