import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <>
      <div>Hello1, TrybeWallet!</div>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </>
  );
}

export default App;
