import React from 'react'

export const Widget = ({content, title, name, flipped}) => {
    let widgetFlip = flipped ? 'WidgetFlipped': 'Widget'
    let classes = `${widgetFlip} ${name}`;
    return (
        <div className={classes}>
            <h3 className={flipped? 'widgetTitleFlipped': 'widgetTitle' }>{title}</h3>
            <div>{content}</div>
        </div>
    )
}