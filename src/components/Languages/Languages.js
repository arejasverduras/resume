import React from 'react';
import { Widget } from '../Widget/Widget';

export const Languages = ({languages, flipped}) => {

    const skillMaker = (skillArray) => {
        return skillArray.map(skill => (
            <li key={skill}>{skill}</li>
        ));
    }

    return (
        <Widget 
            name="languages" 
            title="Languages" 
            content={skillMaker(languages)}
            flipped={flipped}  />
    )
}