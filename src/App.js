import React from 'react';

// import component and nest in function 
import Popular from './components_1/Popular';  
import Landing from './components_1/Landing';
import Headers from './components_1/Headers';

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