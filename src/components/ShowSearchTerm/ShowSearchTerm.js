import React, {useState} from 'react';
import { Widget } from '../Widget/Widget';



export const ShowSearchTerm = ({searchTerm, flipped}) => {
    return (
        // <Widget 
        // title={"title"} 
        // name={"ShowSearchTerm"} 
        // content={`No results for ${searchTerm}`}
        // flipped={flipped}
        // />
        <div className="ShowSearchTerm">
            <h3 className={flipped? 'widgetTitleFlipped': 'widgetTitle' }>""</h3>
            <div>{searchTerm}</div>
        </div>

    )
}