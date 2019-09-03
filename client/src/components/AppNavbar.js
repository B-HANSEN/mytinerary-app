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
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
// import Logout from './auth/Logout';
import Favorites from './../Views/Favorites';

import { loginSocial } from './../actions/authActions';
import { logoutSocial } from './../actions/authActions';
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

  responseGoogleSuccess = (response) => {
    console.log(response);
    this.props.loginSocial(
      { email: response.profileObj.email, name: response.profileObj.name }     
    );
  }

  responseGoogleFail = (response) => {
    console.log(response);
  }

  logOut = (response) => {
    console.log("logOut", response);
    this.props.logoutSocial(
      { email: response.profileObj.email, name: response.profileObj.name }     
    );
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
          {/* <NavItem>
            <Logout />
          </NavItem> */}
          <NavItem>
            <Favorites />
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

    function onSignIn(googleUser) {
     console.log(googleUser);
    }

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
              
                    <div className="socialMedia">
                      <GoogleLogin
                        clientId="207436970178-tt81pf2cbje3tfhb1q4esg4qe1fcjkod.apps.googleusercontent.com"
                        buttonText="Sign-in"
                        onSuccess={this.responseGoogleSuccess}
                        onFailure={this.responseGoogleFail}
                        cookiePolicy={'single_host_origin'}
                      />

                      <GoogleLogout
                        icon={false}
                        clientId="207436970178-tt81pf2cbje3tfhb1q4esg4qe1fcjkod.apps.googleusercontent.com"
                        buttonText="Logout"
                        onSuccess={this.logOut}
                      />
                    </div>

                    <DropdownItem divider />
                    <NavLink className="dropdownItem" href="/cities">Cities</NavLink>
                    <NavLink className="dropdownItem" href="/favorites">{isAuthenticated ? authLinks : null}
                      </NavLink>
        
                </Collapse>
          </Navbar>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginSocial, logoutSocial }) (AppNavbar);