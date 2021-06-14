import React from 'react';
import { Route, Switch } from 'react-router';
import { Login, Wallet } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/carteira" component={ Wallet } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
