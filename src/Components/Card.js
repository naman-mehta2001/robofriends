import React from 'react'
import "tachyons"

function Card({name,id,email}) {
    return (
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    )
}

export default Card
