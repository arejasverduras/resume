import React from 'react';
import { profileData } from '../../data';

export const Header = (props) => {
    const [name, title] = profileData;
    
    return (
        <>
            <h2>Michiel</h2>
            {/* <h2>{title}</h2> */}
        </>
    )
}
