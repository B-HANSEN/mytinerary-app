import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store';
import { loadUser } from './actions/authActions';

import Headers from './components/Headers';
import Home from './Views/Home';
import CreateItinerary from './Views/CreateItinerary';
import MYtinerary from './Views/MYtinerary';
import Cities from './Views/Cities';
import Favorites from './Views/Favorites';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onScriptLoadError={() => {}}
    >
      <Provider store={store}>
        <div className='App'>
          <BrowserRouter>
            <Headers />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/createitinerary' element={<CreateItinerary />} />
              <Route path='/cities' element={<Cities />} />
              <Route path='/itineraries/:cityId' element={<MYtinerary />} />
              <Route path='/favorites/:userId' element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
