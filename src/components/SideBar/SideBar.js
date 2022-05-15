import React from 'react';
import { Widget } from '../Widget/Widget';

export const SideBar = (props) => {
    // calculate content for Widget components
    const {summary, keySkills, techSkills,contactInfo, } = props;

    const summaryContent = summary;
    const keySkillsContent = keySkills.map(skill => 
            (
                <li>{skill}</li>
            )
        )

    
    
    return (
        <div className='SideBar'>
                 {/* return Widget component for each sidebar section */}
                 <Widget className="summary" content={summaryContent}  />
                 <Widget className="keySkills" title="Key Skills"  content={keySkillsContent} />
        </div>
    )
}