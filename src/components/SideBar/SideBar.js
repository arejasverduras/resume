import React from 'react';
import { Widget } from '../Widget/Widget';

export const SideBar = (props) => {
    // calculate content for Widget components
    const {summary, keySkills, techSkills,contactInfo, } = props;

    const summaryContent = summary;
    const keySkillsContent = keySkills.map(skill => (
                <li key={skill}>{skill}</li>
            ));

    const techSkillsContent = techSkills.map(tech => (
        <li key={tech}>{tech}</li>
    ));

    const contactArray = Object.entries(contactInfo);




    const contactContent = contactArray.map(([key, value]) => (
        // <li key={key}>{key}:{value}</li>
        <li key={key}>
            <table>
                <tr>
                    <td id="tableKey">{key} :</td>
                    <td id="tableValue">{value}</td>
                    </tr>            
            </table></li>
    ));

    return (
        <div className='SideBar'>
                 <Widget name="contact" title="Contact" content={contactContent}  />
                 <Widget name="summary" content={summaryContent}  />
                 <Widget name="keySkills" title="Key Skills"  content={keySkillsContent} />
                 <Widget name="techSkills" title="Tech Skills"  content={techSkillsContent} />
        </div>
    )
}