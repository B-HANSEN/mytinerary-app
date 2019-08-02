import React from 'react';
import './search.css';


function Search (props) {
  
    return (
        <div className="search">
            <p>Filter our current cities:</p>
            <input
                onChange={ props.handleInput }
                type="text" 
                placeholder="Search..."
            />
        </div>
    )
}

export default Search;