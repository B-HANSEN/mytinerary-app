import React from 'react';
import home from '../images/homeIcon.png';
import profile from '../images/profile.png';


function Headers () {
    return (
      <div className="headers">
        <img src={profile} alt="profile" />
        <img src={home} alt="home" />
    </div>
    )
  }
  
  export default Headers;
