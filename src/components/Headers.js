import React from 'react';

// import icons
import profile from '../images/profile.png';
// import hamburger from '../images/hamburger.png';

import network from '../images/network.png';
import wifi from '../images/wifi.png';
import battery from '../images/battery.png';

// import components & styles
import Navbar from './Navbar'
import './Navbar.css';

function Headers () {
    return (
      <div className="headers">
        <div className="left">
          <div>time stamp</div>
          <img className="ham" src={profile} alt="profile" />
        </div>

        <div className="right">
          <div className="icons">
            <img src={network} alt="network" />
            <img src={wifi} alt="wifi" />
            <img src={battery} alt="battery" />          
          </div>
        </div>

        <Navbar />

        {/* <img className="ham" src={hamburger} alt="hamburger" /> */}

      </div>
    )
  }
  
  export default Headers;
