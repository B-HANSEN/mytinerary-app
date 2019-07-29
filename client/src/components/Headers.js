import React from 'react';

// import icons
import profile from '../images/profile.png';

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
          <img className="profile" src={profile} alt="profile" />
        </div>

        <div className="right">
          <div className="icons">
            <img src={network} alt="network" />
            <img src={wifi} alt="wifi" />
            <img src={battery} alt="battery" />          
          </div>
        </div>

        <Navbar />

      </div>
    )
  }
  
  export default Headers;
