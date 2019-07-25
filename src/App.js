import React from 'react';

// import component and nest in function 
import Popular from './components/Popular';  
import Landing from './components/Landing';
import Headers from './components/Headers';

function App() {
  return (
    <div className="App">
      <Headers />
      <Landing />
      <Popular /> 
    </div>
  );
}

export default App;