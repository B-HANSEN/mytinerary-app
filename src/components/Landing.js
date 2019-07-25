import React from 'react';
import logo from '../images/MYtineraryLogo.png';
import arrow from '../images/circled-right-2.png';


function Landing () {
  return (
    <div className="logo">
      <img className="companyLogo" src={logo} alt="logo" />
      <p>Find your perfect trip, designed by insiders <br /> who know and love their cities</p>
      <img className="arrow" src={arrow}  alt="arrow" />
  </div>
  )
}

export default Landing;
