import React from 'react'

export const Search = ({searchTerm, setSearchTerm}) => {
    const handleChange = ({target}) => {
        setSearchTerm(target.value)
    }
    
    return (
        <input 
            value={searchTerm} 
            onChange={handleChange} 
            className="searchField"
            placeholder='Search'>
        </input>
    )
}