import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './header/header';
import Homepage from './homepage/homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
