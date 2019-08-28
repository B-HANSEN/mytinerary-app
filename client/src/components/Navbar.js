import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

// import styles
import props from './components.css';
import { SvgIcon } from '@material-ui/core';


// import hamburger menu
import { slide as Menu } from 'react-burger-menu'


class Navbar extends Component {
     constructor(props) {
       super(props);
      this.state = { isOpen: false };
     }
  
    toggle = (e) => {
        this.setState({ isOpen : !this.state.isOpen })
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
    this.setState({isOpen: state.isOpen})  
    }
    
    render () {
        return (
            <Menu isOpen={this.state.isOpen} width= { 220 } onStateChange={(state) => this.handleStateChange(state)} >
              
                <NavLink to="/" className="menu-item"  onClick={ this.toggle } >
                  <SvgIcon> home </SvgIcon>Home
                </NavLink>    

                <Link to="/createaccount" className="menu-item"   onClick={ this.toggle }>
                    <SvgIcon> add_circle </SvgIcon>Create Account
                </Link>

                 
                <Link to="/login" className="menu-item"   onClick={ this.toggle }>
                    <SvgIcon> home </SvgIcon>Login
                </Link>

                <Link to="/cities" className="menu-item"   onClick={ this.toggle }>
                    <SvgIcon> home </SvgIcon>Cities
                </Link>

            </Menu>
        );
    }   
}

export default Navbar