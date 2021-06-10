import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route to="/" component={ Login } />
      </Switch>
    );
  }
}
