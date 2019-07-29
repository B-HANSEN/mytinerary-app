import React from 'react';

// import component and nest in function 
import Popular from './Components/Popular';  
import Landing from './Components/Landing';
import Headers from './Components/Headers';

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