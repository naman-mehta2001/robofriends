import React from 'react'
import "./scroll.css"

function Scroll(props) {
    return (
        <div className="scrollprop">
            {props.children}
        </div>
    )
}

export default Scroll
