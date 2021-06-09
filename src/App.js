import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
