import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import Clock from './Clock';
import profile from '../images/profile.png';

// import components & styles
import Navbar from './Navbar'
import './components.css';

const Headers = () => (
    <StickyHeader  
      header={
              <div>

                <div className="headers">
                  <div>
                    <img className="profile" src={profile} alt="profile" />
                  </div>

                  <div className="center">
                    <Clock />
                  </div>  

                    
                  <Navbar />


                </div>
           
              
              </div>
        }> 
      </StickyHeader>
  );
  
  export default Headers;