import React, { Component, Fragment } from 'react';
import {
  // Collapse,
  // Navbar,
  // NavbarToggler,
  // Nav,
  NavItem,
  // NavLink,
  // Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

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
      <div>

          <div className="nav-item dropdown">      
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Login/ Signup
              </a>
              
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" >{isAuthenticated ? authLinks : guestLinks} </a>
              </div>
          </div>



          {/* <div>
              <Navbar color='dark' dark expand='sm' className='mb-5'>
                <Container>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                      {isAuthenticated ? authLinks : guestLinks}
                    </Nav>
                  </Collapse>
                </Container>
              </Navbar>
          </div>  
        */}
       
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