import React from 'react'
import { Card } from '../card/Card.component'

import './Card-list.styles.css'

export function CardList(props) {
    return (
        <div className='card-list'>
            {props.monsters.map((monster, idx) =>(
            <Card key={idx} monster={monster} />
            ))}
        </div>
    )
}
