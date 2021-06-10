import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route
        path="/carteira"
        render={ (reactRouterProps) => (<Wallet { ...reactRouterProps } />) }
      />
      <Route
        path="/"
        render={ (reactRouterProps) => (<Login { ...reactRouterProps } />) }
      />
    </Switch>

  );
}

export default App;
