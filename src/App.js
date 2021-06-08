import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      <h1>Trybe Wallet</h1>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </>
  );
}

export default App;
