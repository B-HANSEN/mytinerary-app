import React, { Component, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
import GoogleLogout from 'react-google-login';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import { logoutSocial } from './../actions/authActions';
import './components.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";

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

  // responseGoogleSuccess = (response) => {
  //   console.log(response);
  //   this.props.loginSocial(
  //     { email: response.profileObj.email, name: response.profileObj.name }  
  //   );
  //   this.toggleNavbar()  
  // }

  // responseGoogleFail = (response) => {
  //   console.log(response);
  // }

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
              <NavLink className="dropdownItem" href="/"  style={{color: 'black'}}>Home
              </NavLink>
              <DropdownItem divider />
              <NavItem>
                <span className='navbar-text mr-3'>
                  <strong>{user ? `Welcome ${user.name}!` : ''}</strong>
                </span>
              </NavItem>
      
              <NavItem> 
              { user ? <Link to={ '/favorites/' + user._id }>Your Favorites</Link> : "" }
              </NavItem>
          </Fragment>
    );

    const guestLinks = (
      <Fragment>
          <NavLink className="dropdownItem" href="/"  style={{color: 'black'}}>Home
          </NavLink>
          <DropdownItem divider />
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
     
          <Navbar style={{backgroundColor: '#f5f5f5'}} light>
              
              {/* show only profile avatar when user is not logged in */}
              { isAuthenticated
                ? <img className="headerpic" src= { user.avatar } alt="" />
                : 
                // <button >
                    <MDBIcon icon="user-circle" size="2x"/>
                  // </button>
              }

              <NavbarBrand href="/">MYtinerary travel app
              </NavbarBrand>

              <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
                 
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    
                    <DropdownItem divider />
                          <Nav onClick={this.onClick} navbar>
                            { isAuthenticated ? authLinks : guestLinks }
                          </Nav> 

                    { isAuthenticated
                      ? <GoogleLogout
                        icon={false}
                        clientId="207436970178-tt81pf2cbje3tfhb1q4esg4qe1fcjkod.apps.googleusercontent.com"
                        buttonText="Logout"
                        onSuccess={ this.logOut }
                        />
                      : null }
                    
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

export default connect(mapStateToProps, { logoutSocial }) (AppNavbar);