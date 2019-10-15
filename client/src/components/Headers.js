import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import AppNavbar from './AppNavbar'

import './components.css';

const Headers = () => (
    <StickyHeader  
      header={
        
              <div className="headers">
              <AppNavbar /> 
              </div>   

              }> 
      </StickyHeader>
  );
  
  export default Headers;