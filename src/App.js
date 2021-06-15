import React from 'react';
import { Route, Switch } from 'react-router';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

class App {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
