import React, { Component, Fragment } from 'react';
import { Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
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
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
// import Logout from './auth/Logout';
// import Favorites from './../Views/Favorites';

import { loginSocial } from './../actions/authActions';
import { logoutSocial } from './../actions/authActions';
import './components.css';

class AppNavbar extends Component {
  state = {
    collapsed: true,
    redirect: false 
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

// link to single users's favorites page
  setRedirect = () => { this.setState({ redirect: true })
  }
  renderRedirect = (id) => { console.log(this.props)
      this.props.location.push('/favorites/' + id)
      return <Redirect to={'/favorites/' + id} />
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
          <Fragment>
              <NavItem>
                <span className='navbar-text mr-3'>
                  <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                </span>
              </NavItem>
      
              <NavItem> 
              { user ? <Link to={ '/favorites/' + user._id }>Favorites</Link> : "" }
              </NavItem>
          </Fragment>
      </div>
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

    // function onSignIn(googleUser) {
    //   console.log(googleUser);
    //  }

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
                            {isAuthenticated ? authLinks : guestLinks}
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