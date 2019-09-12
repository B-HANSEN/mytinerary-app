import React from 'react';
import './components.css';


function Search (props) {
  
    return (
        <div className="search">
            <p>Filter our current cities:</p>
            <input
            // means execute handleInput-function in parent component??
                onChange={ props.handleInput }
                type="text" 
                placeholder="Search by city..."
            />
        </div>
    )
}

// why no subscription to props mapStateToProps??   
export default Search;