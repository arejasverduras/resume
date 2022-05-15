import React from 'react';
import { Widget } from '../Widget/Widget';

export const SideBar = (props) => {
    // calculate content for Widget components
    const {summary, keySkills, techSkills,contactInfo, } = props;

    const summaryContent = summary;
    const keySkillsContent = keySkills.map(skill => (
                <li>{skill}</li>
            ));

    const techSkillsContent = techSkills.map(tech => (
        <li>{tech}</li>
    ));

    return (
        <div className='SideBar'>
                 {/* return Widget component for each sidebar section */}
                 <Widget name="summary" content={summaryContent}  />
                 <Widget name="keySkills" title="Key Skills"  content={keySkillsContent} />
                 <Widget name="techSkills" title="Tech Skills"  content={techSkillsContent} />
        </div>
    )
}