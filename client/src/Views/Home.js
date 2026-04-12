import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RegisterModal from './../components/auth/RegisterModal';
import LoginModal from './../components/auth/LoginModal';
import { loginSocial } from './../actions/authActions';
import Footer from './../components/Footer';
import logo from '../files/images/MYtineraryLogo.png';
import arrow from '../files/images/circled-right-2.png';
import './views.css';
import { GoogleLogin } from '@react-oauth/google';

function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const responseGoogleSuccess = (response) => {
    const decoded = JSON.parse(atob(response.credential.split('.')[1]));
    dispatch(loginSocial({ email: decoded.email, name: decoded.name }));
  };

  return (
    <div className='logo'>
      <img className='companyLogo' src={logo} alt='logo' />
      <p>
        Find your perfect trip, designed by insiders <br /> who know and love their cities
      </p>
      <h2>Start browsing</h2>

      <div>
        <Link to='/cities'>
          <img className='arrow' src={arrow} alt='arrow' />
        </Link>
      </div>

      <p className='bold'>Want to build your own itinerary?</p>

      <div className='links'>
        {isAuthenticated ? null : <RegisterModal />}

        <div className='login_section'>
          {isAuthenticated ? (
            <Link to='/CreateItinerary' className='bluehighlight'>
              Create your own itinerary here...
            </Link>
          ) : (
            <LoginModal />
          )}

          {isAuthenticated ? null : (
            <GoogleLogin
              onSuccess={responseGoogleSuccess}
              onError={() => console.log('Google login failed')}
            />
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
