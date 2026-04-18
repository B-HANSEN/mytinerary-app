import { useState } from 'react';
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
} from 'reactstrap';
import { googleLogout } from '@react-oauth/google';
import { FaUserCircle } from 'react-icons/fa';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import { logoutSocial } from './../actions/authActions';
import './components.css';

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
      <hr className='my-1' />
      <NavItem>
        <span className='navbar-text me-3'>
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
      <hr className='my-1' />
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
          <img className='headerpic' src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <FaUserCircle size={32} aria-hidden='true' />
        )}

        <NavbarBrand href='/'>MYtinerary travel app</NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className='me-2' />

        <Collapse isOpen={!collapsed} navbar>
          <hr className='my-1' />
          <Nav onClick={() => setCollapsed(true)} navbar>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>

          {isAuthenticated ? (
            <button onClick={logOut} className='btn btn-sm btn-outline-secondary'>
              Logout
            </button>
          ) : null}

          <hr className='my-1' />
          <Link className='dropdownItem' to='/cities' onClick={toggleNavbar}>
            Cities
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
