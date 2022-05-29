import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './header/header';
import Homepage from './homepage/homepage';
import Mint from './mint/mint';

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Homepage/>} />
                    <Route path="mint" element={<Mint />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
