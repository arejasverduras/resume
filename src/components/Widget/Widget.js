import React from 'react'

export const Widget = ({content, title}) => {

    return (
        <div className="Widget">
            <h3>{title}</h3>
            {content}
        </div>
    )
}