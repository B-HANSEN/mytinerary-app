import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'


// import hamburger menu
import { slide as Menu } from 'react-burger-menu'


class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = { isOpen: true };
    }
  
    toggle() {
      this.setState(prevState => (
        { isOpen: !this.prevState.isOpen }));
    }   

    render () {
        return (
            // Pass on props
            <Menu {...props} width= { 220 } isOpen={this.state.isOpen} >
                <NavLink to="/" className="menu-item"  onClick={this.toggle} >Home</NavLink>
                <Link to="/createaccount" className="menu-item"   onClick={this.toggle}>Create Account</Link>
                <Link to="/login" className="menu-item"   onClick={this.toggle}>Login</Link>
                <Link to="/mytinerary" className="menu-item"   onClick={this.toggle}>MYtinerary</Link>
                <Link to="/cities" className="menu-item"   onClick={this.toggle}>Cities</Link>
            </Menu>
        );
    }   
}

export default Navbar