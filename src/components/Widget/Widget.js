import React from 'react'

export const Widget = ({content, title, name}) => {

    return (
        <div className="Widget" >
            <h3>{title}</h3>
            <div className={name}>{content}</div>
        </div>
    )
}