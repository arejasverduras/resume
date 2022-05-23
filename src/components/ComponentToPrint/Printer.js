import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import {App}from '../../App';

// import { ComponentToPrint } from './ComponentToPrint';
// import { Contact } from '../Contact/Contact';

export const Printer = (props, ref) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
  <App ref={componentRef}/>
    </div>
  );
};