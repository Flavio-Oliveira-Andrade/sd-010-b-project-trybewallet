import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import './App.css';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
