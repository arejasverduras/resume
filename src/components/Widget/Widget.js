import React from 'react'

export const Widget = ({content, title, name}) => {

    return (
        <div className={name} >
            <h3 className="widgetTitle">{title}</h3>
            <div>{content}</div>
        </div>
    )
}