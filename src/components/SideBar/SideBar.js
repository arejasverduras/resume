import React from 'react';
import { Widget } from '../Widget/Widget';

export const SideBar = (props) => {
    // calculate content for Widget components
    const {keySkills, techSkills,mktSkills, addSkills,languages, hobbies,flipped} = props;
    
    const skillMaker = (skillArray) => {
      return skillArray.map(skill => (
          <li key={skill}>{skill}</li>
      ));
   }

    return (
        <div className='SideBar'>
                 <Widget 
                    name="keySkills" 
                    title="Key Skills"  
                    content={skillMaker(keySkills)}
                    flipped={flipped} />
                 <Widget 
                    name="techSkills" 
                    title="Tech Skills"  
                    content={skillMaker(techSkills)}
                    flipped={flipped} />
                 <Widget 
                    name="mktSkills" 
                    title="Marketing Skills"  
                    content={skillMaker(mktSkills)}
                    flipped={flipped} />
                 <Widget 
                    name="addSkills" 
                    title="Additional Skills"  
                    content={skillMaker(addSkills)}
                    flipped={flipped} />
                 <Widget 
                    name="languages" 
                    title="Languages"  
                    content={skillMaker(languages)}
                    flipped={flipped} />
                 <Widget 
                    name="hobbies" 
                    title="Hobbies"  
                    content={skillMaker(hobbies)}
                    flipped={flipped} />
        </div>
    )
}