import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

import './components.css';

class AppNavbar extends Component {
  state = {
    collapsed: true
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
          <NavItem>
            <span className='navbar-text mr-3'>
              <strong>{user ? `Welcome ${user.name}` : ''}</strong>
            </span>
          </NavItem>
          <NavItem>
            <Logout />
          </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
          <NavItem>
            <RegisterModal />
          </NavItem>
          <NavItem>
            <LoginModal />
          </NavItem>
      </Fragment>
    );

    return (
      <div >

          <Navbar color="light" light>
              
              <NavbarBrand href="/" className="mr-auto">   MYtinerary travel app
                     </NavbarBrand>

           
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                 
                  <Collapse isOpen={!this.state.collapsed} navbar>
              
              <DropdownItem divider /> 
                    <NavLink className="dropdownItem" href="/">Home</NavLink>
          
              <DropdownItem divider />
                    <Nav navbar>
                      <NavItem >{isAuthenticated ? authLinks : guestLinks}</NavItem>
                    </Nav>
              <DropdownItem divider />
        
              <NavLink className="dropdownItem" href="/cities">Cities</NavLink>
          
              </Collapse>
          </Navbar>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);