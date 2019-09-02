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


import GoogleLogin from 'react-google-login';


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
    const responseGoogle = (response) => {
      console.log(response);
    }
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

    function onSignIn(googleUser) {
      // retrieve profile information for a user:
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
     
      // get the user's ID token:
      var id_token = googleUser.getAuthResponse().id_token;
      
      // send the ID token to your server with an HTTPS POST request
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://yourbackend.example.com/tokensignin');   // whats the backend URL??
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
      };
      xhr.send('idtoken=' + id_token);
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
        
              <NavLink className="dropdownItem" href="/cities">Cities</NavLink>


        <GoogleLogin
                    clientId="207436970178-lvb7du75m56c796hqcjgmn1bs1natjmb.apps.googleusercontent.com"
                    buttonText="Sign-in"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
        />
   
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