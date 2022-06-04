import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// @ts-ignore
import SnackbarProvider from 'react-simple-snackbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './header/header';
import Homepage from './homepage/homepage';
import Mint from './mint/mint';
import WLChecker from './wl-chcker/wl-checker';

function App() {
  const [account, setAccount] = useState<string | null>(null);

  return (
    <SnackbarProvider>
      <div className="App">
        <Header account={account} setAccount={setAccount} />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route
                path="mint"
                element={<Mint account={account} setAccount={setAccount} />}
              />
              <Route path="wl" element={<WLChecker></WLChecker>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  );
}

export default App;
