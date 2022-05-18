import React from 'react';
import { Widget } from '../Widget/Widget';

export const Summary = ({summary, flipped}) => {
    const objective = 
    <>
        <p><b>Startup founder turned developer.</b></p>
        <p>Extremely passionate about building beautifull, practical and smart things. Self-starting, highly determined, obsessively persistent.</p>
        <p>Having completed the Front-end section of the Full Stack Career Course on <a href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path">codecademy</a>, I am eager to practice my new found skills as a Front-end / React Developer. </p>
        <p>Open for a junior position or Freelance assignment. Remote / hybrid preferred. <br/>Get in touch!</p>
    </>

//  ',


    return (
        <Widget 
            name="summary" 
            title="About me" 
            content={objective}
            flipped={flipped}  />
    )
}