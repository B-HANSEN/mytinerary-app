import React from 'react'

// import hamburger menu
import { slide as Menu } from 'react-burger-menu'


export default props => {
    return (
      // Pass on our props
      <Menu {...props} width= { 220 } isOpen={ true }>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/createaccount">Create Account</a>
        <a className="menu-item" href="/login">Login</a>
        <a className="menu-item" href="/mytinerary">MYtinerary</a>
        <a className="menu-item" href="/cities">Cities</a>
      </Menu>
    );
  };