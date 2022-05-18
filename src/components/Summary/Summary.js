import React from 'react';
import { Widget } from '../Widget/Widget';

export const Summary = ({summary, flipped}) => {

    return (
        <Widget 
            name="summary" 
            title="About me" 
            content={summary}
            flipped={flipped}  />
    )
}