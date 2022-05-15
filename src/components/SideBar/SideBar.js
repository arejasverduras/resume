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
    const contactTable = 
    <table>
{        contactArray.map(([key, value]) => 
                <tr>
                    <td style={{"width": "30%"}}colSpan="1" className="contactKey">{key}</td>
                    <td className="contactValue">{value}</td>
                </tr>              
        )}
    </table>

    return (
        <div className='SideBar'>
                 <Widget name="contact" title="Contact" content={contactTable}  />
                 <Widget name="summary" content={summaryContent}  />
                 <Widget name="keySkills" title="Key Skills"  content={keySkillsContent} />
                 <Widget name="techSkills" title="Tech Skills"  content={techSkillsContent} />
        </div>
    )
}