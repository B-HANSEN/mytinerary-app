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
    this.toggleNavbar()  
  }

  responseGoogleFail = (response) => {
    console.log(response);
  }

  logOut = (response) => {
    console.log("logOut", response);
    this.props.logoutSocial(
      { email: response.profileObj.email, name: response.profileObj.name }     
    );
    this.toggleNavbar()  
  }

  onClick = e => {
    this.setState({ collapsed: true });
  };

// link to single users's favorites page
  setRedirect = () => {
    this.setState ({ redirect: true })
  }
  renderRedirect = () => {
      return <Redirect to='/' />
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(this.state);
    console.log(user);
  
    const authLinks = (
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
              <NavbarBrand href="/" className="mr-auto">MYtinerary travel app
                     </NavbarBrand>

              <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
                 
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    
                    <DropdownItem divider /> 
                          <NavLink className="dropdownItem" href="/">Home</NavLink>
                
                    <DropdownItem divider />
                          <Nav onClick={this.onClick} navbar>
                            { isAuthenticated ? authLinks : guestLinks }
                          </Nav> 
                    <DropdownItem divider />
              
                    <div>
                      { isAuthenticated ? 
                        null
                        :
                        <GoogleLogin
                        clientId="207436970178-tt81pf2cbje3tfhb1q4esg4qe1fcjkod.apps.googleusercontent.com"
                        buttonText="... or login with Google"
                        onSuccess={ this.responseGoogleSuccess }
                        onFailure={ this.responseGoogleFail }
                        cookiePolicy={ 'single_host_origin' }
                      /> }

                      <GoogleLogout
                        icon={false}
                        clientId="207436970178-tt81pf2cbje3tfhb1q4esg4qe1fcjkod.apps.googleusercontent.com"
                        buttonText="Logout"
                        onSuccess={ this.logOut }
                      />
                    </div>

                    <DropdownItem divider />
                    <Link className="dropdownItem" to="/cities" onClick={ this.toggleNavbar }>Cities</Link>
                    
                </Collapse>
                { isAuthenticated ? null : this.renderRedirect() } 
          </Navbar>

      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { loginSocial, logoutSocial }) (AppNavbar);