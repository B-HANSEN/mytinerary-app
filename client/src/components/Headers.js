import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import AppNavbar from './AppNavbar'

// import components & styles
import Navbar from './Navbar'
import './components.css';

const Headers = () => (
    <StickyHeader  
      header={
              <div>
                  <div className="headers">

                    <div>
                      <i id="profile" className="material-icons">
                        account_circle
           
                      </i>
 
                    </div>
                    <AppNavbar /> 
                  
               
             

                  <Navbar />
                 
                  </div>   
           
              </div>
              }> 
      </StickyHeader>
  );
  
  export default Headers;