import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return(
    <Switch>
      <Router exact path="/">{ Login }</Router>
    </Switch>
  );
}

export default App;
