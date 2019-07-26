import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

// import omponents
import Headers from './Components/Headers'
import Footer from './Components/Footer'

// import Views
import Home from './Views/Home'
import CreateAccount from './Views/CreateAccount'
import Login from './Views/Login'
import MYtinerary from './Views/MYtinerary'
import Cities from './Views/Cities'

class App extends Component{
  render () {
    return (
        <div className="App">
         
          <BrowserRouter>
          <Headers/>
            <Route exact path='/' component={Home} />
            <Route path='/createaccount' component={CreateAccount} />
            <Route path='/login' component={Login} />
            <Route path='/mytinerary' component={MYtinerary} />
            <Route path='/cities' component={Cities} />         
          </BrowserRouter>

          <Footer />
        </div>
    );
  } 
}

export default App;