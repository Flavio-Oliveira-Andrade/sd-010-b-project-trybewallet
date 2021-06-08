import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
