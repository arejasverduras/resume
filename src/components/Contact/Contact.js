import React from 'react';
import { Widget } from '../Widget/Widget';

export const Contact = React.forwardRef (({contactInfo, flipped}, ref) => {
    const contactTable = 
    <table>
{        contactInfo.map(([key, value]) => 
                <tr>
                    <td style={{"width": "30%"}}colSpan="1" className="contactKey">{key}</td>
                    <td className="contactValue">{value}</td>
                </tr>              
        )}
    </table>



    return (
        <div ref={ref}>
        <Widget 
            name="contact" 
            title="Contact" 
            content={contactTable} 
            flipped={flipped}  />
        </div>
    )
});