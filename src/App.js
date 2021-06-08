import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
    </Switch>
  );
}

export default App;
// mudança aleatória para dar o PR
