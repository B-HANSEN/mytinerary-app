import React from 'react';

// import component and nest in function 
import Headers from './components_2/Headers2';
import Landing from './components_2/Landing2';
import Footer from './components_2/Footer2';

import Navbar from './components_2/Navbar'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components_2/Home'
import About from './components_2/About'
import Contact from './components_2/Contact'


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            <Headers />
            <Landing />
            <Footer />    
        </div>
    </BrowserRouter>
  );
}

export default App;