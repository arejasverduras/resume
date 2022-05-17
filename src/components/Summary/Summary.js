import React from 'react';
import { Widget } from '../Widget/Widget';

export const Summary = ({summary, flipped}) => {

    return (
        <Widget 
            name="summary" 
            title="" 
            content={summary}
            flipped={flipped}  />
    )
}