import React from 'react';

// import icons
import logo from '../images/MYtineraryLogo.png';
import arrow from '../images/circled-right-2.png';

const Home = () => {
  return (
    <div className="logo">
        <img className="companyLogo" src={logo} alt="logo" />
        <p>Find your perfect trip, designed by insiders <br /> who know and love their cities</p>
        <h2>Start browsing</h2>
        <img className="arrow" src={arrow}  alt="arrow" />
        <p className="bold">Want to build your own itinerary?</p>
        <div className="links"></div>
  </div>
  )
}

export default Home