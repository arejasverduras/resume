import React, {useEffect} from 'react'

export const Search = ({searchTerm, setSearchTerm}) => {
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        // console.log('hallo??');
        e.target.firstChild.blur();
    }

    const scrollSearchIntoView = ()=>{
        document.getElementById("form").scrollIntoView();
    }

    useEffect(()=>{
        let searchbar = document.getElementById("form");
        searchbar.addEventListener('click', scrollSearchIntoView);
        return ()=>{
            searchbar.removeEventListener('click', scrollSearchIntoView);
        }
    },[searchTerm])
    
    return (
        <form onSubmit={handleClick} id="form">
            <input 
                type="text"
                value={searchTerm} 
                onChange={handleChange} 
                className="searchField"
                placeholder='Try me!'         
                />
        </form>
    )
}