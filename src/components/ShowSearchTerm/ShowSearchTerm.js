import React from 'react';
import { Widget } from '../Widget/Widget';

export const ShowSearchTerm = ({searchTerm, flipped}) => {
    return (
        <Widget 
        title={''} 
        name={"ShowSearchTerm"} 
        content={`Your search: ${searchTerm}`}
        flipped={flipped}
        />
    )
}
