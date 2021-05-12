import React from 'react'
import Card from "./Card"

function CardList({robots}) {
    const cardList = robots.map((user) => <Card key={user.id} id={user.id} email={user.email} name= {user.name} />)
    return (
        <div>
            {cardList}
        </div>
    )
}

export default CardList
