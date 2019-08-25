import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import Clock from './Clock';
import profile from '../images/profile.png';
import network from '../images/network.png';
import wifi from '../images/wifi.png';
import battery from '../images/battery.png';

// import components & styles
import Navbar from './Navbar'
import './Navbar.css';

const Headers = () => (
    <StickyHeader  
      header={
              <div className="headers">
                <div className="left">
                  <div>
                    <Clock />
                  </div>
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
        }> 
      </StickyHeader>
  );
  
  export default Headers;