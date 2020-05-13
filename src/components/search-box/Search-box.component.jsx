import React from 'react'
import './Search-box.styles.css'

export function SearchBox({ placeholder, handleChange }) {
    return (
        <div>
            <input className='search'
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}
