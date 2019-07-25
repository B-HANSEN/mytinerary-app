import React from 'react'
import { NavLink } from 'react-router-dom'

// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>
            <li><NavLink to="/createaccount">Create Account</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/mytinerary">MYtinerary</NavLink></li>
            <li><NavLink to="/cities">Cities</NavLink></li>
        </ul>
    )
}

export default Navbar