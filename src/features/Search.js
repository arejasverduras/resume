import React from 'react'

export const Search = ({searchTerm, setSearchTerm}) => {
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.key === 'Enter'){
            console.log('enter recognized')
            e.target.blur();
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log('hallo??');
        e.target.blur();
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