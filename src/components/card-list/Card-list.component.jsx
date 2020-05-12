import React from 'react'
import './card-list/card-list.styles.css'
import './card-list.styles.css'
export default function CardList(props) {
    return (
        <div className='card-list'>
            {props.children}
        </div>
    )
}
