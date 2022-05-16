import React from 'react';
import { Widget } from '../Widget/Widget';

export const Contact = ({contactInfo}) => {
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
        <>
        <Widget name="contact" title="Contact" content={contactTable}  />
        </>
    )
}