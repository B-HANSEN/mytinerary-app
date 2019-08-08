import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// configure enzyme to use adapter
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import omponents
import Headers from './components/Headers'
import Footer from './components/Footer'

// import Views
import Home from './Views/Home'
import CreateAccount from './Views/CreateAccount'
import Login from './Views/Login'
import MYtinerary from './Views/MYtinerary'
import Cities from './Views/Cities'


Enzyme.configure({ adapter: new Adapter() });

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
         
          <BrowserRouter>
          <Headers/>
            <Route exact path='/' component={Home} />
            <Route path='/createaccount' component={CreateAccount} />
            <Route path='/login' component={Login} />
            <Route path='/cities' component={Cities} />  
            <Route path='/itineraries' component={MYtinerary} />
               
          <Footer />
          </BrowserRouter>

        </div>
      </Provider>
    );
  } 
}

export default App;