import React from 'react';
import { Widget } from '../Widget/Widget';

export const Summary = ({summary, flipped}) => {

    return (
        <Widget 
            name="summary" 
            title="Hello!" 
            content={summary}
            flipped={flipped}  />
    )
}