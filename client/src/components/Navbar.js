import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

// import styles
import props from './Navbar.css';

// import hamburger menu
import { slide as Menu } from 'react-burger-menu'


class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = { isOpen: false };
    }
  
    toggle = () => {
      this.setState( 
        { isOpen: !this.state.isOpen });
    }   

    render () {
        return (
            <Menu {...props} width= { 220 } isOpen={this.state} >
                <NavLink to="/" className="menu-item"  onClick={this.toggle} >Home</NavLink>
                <Link to="/createaccount" className="menu-item"   onClick={this.toggle}>Create Account</Link>
                <Link to="/login" className="menu-item"   onClick={this.toggle}>Login</Link>
                <Link to="/cities" className="menu-item"   onClick={this.toggle}>Cities</Link>
                <Link to="/itineraries" className="menu-item"   onClick={this.toggle}>MYtinerary</Link>
            </Menu>
        );
    }   
}

export default Navbar