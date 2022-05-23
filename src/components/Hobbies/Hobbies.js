import React from 'react';
import { Widget } from '../Widget/Widget';

export const Hobbies = ({hobbies, flipped}) => {

    const skillMaker = (skillArray) => {
        return skillArray.map(skill => (
            <li key={skill}>{skill}</li>
        ));
    }

    return (
        <Widget 
            name="hobbies" 
            title="Hobbies" 
            content={skillMaker(hobbies)}
            flipped={flipped}  />
    )
}