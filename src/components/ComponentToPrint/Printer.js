import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

// import { ComponentToPrint } from './ComponentToPrint';
import { Contact } from '../Contact/Contact';

export const Printer = ({contactInfo, flipped}) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <Contact 
        contactInfo={contactInfo}
        flipped={flipped}
        ref={componentRef} />
    </div>
  );
};