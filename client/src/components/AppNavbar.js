import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
} from 'reactstrap';
import { googleLogout } from '@react-oauth/google';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import { logoutSocial } from './../actions/authActions';
import './components.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from 'mdbreact';

function AppNavbar() {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const toggleNavbar = () => setCollapsed((c) => !c);

  const logOut = () => {
    googleLogout();
    dispatch(logoutSocial());
    setCollapsed(true);
  };

  const authLinks = (
    <>
      <NavLink className='dropdownItem' href='/' style={{ color: 'black' }}>
        Home
      </NavLink>
      <DropdownItem divider />
      <NavItem>
        <span className='navbar-text mr-3'>
          <strong>{user ? `Welcome ${user.name}!` : ''}</strong>
        </span>
      </NavItem>
      <NavItem>{user ? <Link to={'/favorites/' + user._id}>Your Favorites</Link> : ''}</NavItem>
    </>
  );

  const guestLinks = (
    <>
      <NavLink className='dropdownItem' href='/' style={{ color: 'black' }}>
        Home
      </NavLink>
      <DropdownItem divider />
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar style={{ backgroundColor: '#f5f5f5' }} light>
        {isAuthenticated ? (
          <img className='headerpic' src={user.avatar} alt='' />
        ) : (
          <MDBIcon icon='user-circle' size='2x' />
        )}

        <NavbarBrand href='/'>MYtinerary travel app</NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className='mr-2' />

        <Collapse isOpen={!collapsed} navbar>
          <DropdownItem divider />
          <Nav onClick={() => setCollapsed(true)} navbar>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>

          {isAuthenticated ? (
            <button onClick={logOut} className='btn btn-sm btn-outline-secondary'>
              Logout
            </button>
          ) : null}

          <DropdownItem divider />
          <Link className='dropdownItem' to='/cities' onClick={toggleNavbar}>
            Cities
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
