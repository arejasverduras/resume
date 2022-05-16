import React from 'react'

export const Widget = ({content, title, name}) => {
    let classes = `Widget ${name}`;
    return (
        <div className={classes}>
            <h3 className="widgetTitle">{title}</h3>
            <div>{content}</div>
        </div>
    )
}