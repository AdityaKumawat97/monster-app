import React from 'react'
import './Card.styles.css'

export function Card(props) {
    return (
        <div className='card-container'>
            <h1>{props.monster.name}</h1>
        </div>
    )
}
