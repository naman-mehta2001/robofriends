import React from 'react'
import "tachyons"

const SearchBox = ({change}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="text" placeholder = "search robots" onChange={change} />
        </div>
    )
}

export default SearchBox