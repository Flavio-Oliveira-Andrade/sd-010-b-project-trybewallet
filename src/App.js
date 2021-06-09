import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
