import React from 'react';
import { Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Router exact path="/">{ Login }</Router>
    </Switch>
  );
}

export default App;
