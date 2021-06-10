import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <h1>Trybe Wallet</h1>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Wallet />
      </Switch>
    </>
  );
}

export default App;
