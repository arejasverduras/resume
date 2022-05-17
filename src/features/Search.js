import React from 'react'

export const Search = ({searchTerm, setSearchTerm}) => {
    const handleChange = ({target}) => {
        setSearchTerm(target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        return searchTerm;
    }
    
    return (
        <form onSubmit={handleClick} id="form">
            <input 
                type="text"
                value={searchTerm} 
                onChange={handleChange} 
                className="searchField"
                placeholder='Search'
                />
        </form>
    )
}