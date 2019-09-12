import React from 'react';
import './components.css';


function Search (props) {
  
    return (
        <div className="search">
            <p>Filter our current cities:</p>
            <input
                onChange={ props.handleInput }
                type="text" 
                placeholder="Search by city..."
            />
        </div>
    )
}
  
export default Search;