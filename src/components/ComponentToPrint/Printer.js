import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import {App}from '../../App';
import { profileData } from '../../data';

// import { ComponentToPrint } from './ComponentToPrint';
// import { Contact } from '../Contact/Contact';

export const Printer = (props, ref) => {
  const componentRef = useRef();

  const centerOnPage = () => {
    let toStyle = document.getElementsByClassName('App')[0];
    toStyle.style.fontSize="0.6em";
    toStyle.style.gridTemplateColumns= '30% 20% 55%';

    let header = document.getElementsByClassName('header')[0];
    if (header) {
      header.style.height = '80px';
      header.style.margin='0';
    }
  
    const allWidgets = Array.from(document.getElementsByClassName('Widget'));
    for (let widget of allWidgets){
      widget.style.padding="6px";
    }

    let profilePicture = document.getElementsByClassName('profilePicture')[0];
    if (profilePicture){
      profilePicture.style.width = '80px';
    } else {
      let profilePictureFlipped = document.getElementsByClassName('profilePictureFlipped')[0];
      profilePictureFlipped.style.width = '80px';

    }
    

    let headerName = document.getElementsByClassName('headerName')[0];
    headerName.style.fontSize='16px';

    let headerTitle = document.getElementsByClassName('headerTitle')[0];
    headerTitle.style.fontSize='12px';

  }

  const rePosition = () =>{
    let toReStyle = document.getElementsByClassName('App')[0];
    toReStyle.style.fontSize="1em"
    toReStyle.style.gridTemplateColumns= '35% 33% 33%';

    let header = document.getElementsByClassName('header')[0];
    header.style.height = '';
    header.style.marginBottom='30px';

    const allWidgets = Array.from(document.getElementsByClassName('Widget'));
    for (let widget of allWidgets){
      widget.style.padding="";
    }

    let profilePicture = document.getElementsByClassName('profilePicture')[0];
    profilePicture.style.width = '200px';

    let headerName = document.getElementsByClassName('headerName')[0];
    headerName.style.fontSize='26px';

    let headerTitle = document.getElementsByClassName('headerTitle')[0];
    headerTitle.style.fontSize='22px';
  }

  //download the file directly as PDF
  const {pdf} = profileData;


  return (
    <div className="appContainer">
<ReactToPrint
        onBeforeGetContent={centerOnPage}
        onAfterPrint={rePosition}
        // pageStyle={pageStyle}
        trigger={() => <button className="printButton topButton">Print / Save as PDF</button>}
        content={() => componentRef.current}
      />
      {/* <DownloadPDF pdf={pdf}/> */}
  <App ref={componentRef} />
  {/* <DownloadPDF pdf={pdf}/> */}
  <ReactToPrint 
        onBeforeGetContent={centerOnPage}
        onAfterPrint={rePosition}
        trigger={() => <button className="printButton bottomButton">Print / Save as PDF</button>}
        content={() => componentRef.current}    
      />
      
    </div>
  );
};