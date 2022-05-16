import React from 'react';
import { Widget } from '../Widget/Widget';

export const SideBar = (props) => {
    // calculate content for Widget components
    const {keySkills, techSkills,mktSkills, addSkills,languages, hobbies,} = props;

    const skillMaker = (skillArray) => {
        return skillArray.map(skill => (
            <li key={skill}>{skill}</li>
        ));
    }


    return (
        <div className='SideBar'>
                 <Widget name="keySkills" title="Key Skills"  content={skillMaker(keySkills)} />
                 <Widget name="techSkills" title="Tech Skills"  content={skillMaker(techSkills)} />
                 <Widget name="mktSkills" title="Marketing Skills"  content={skillMaker(mktSkills)} />
                 <Widget name="addSkills" title="Additional Skills"  content={skillMaker(addSkills)} />
                 <Widget name="languages" title="Languages"  content={skillMaker(languages)} />
                 <Widget name="hobbies" title="Hobbies"  content={skillMaker(hobbies)} />
        </div>
    )
}