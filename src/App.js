import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/carteira" component={ Wallet } /> */}
      </Switch>
      <div>Hello, TrybeWallet!</div>
    </>
  );
}

export default App;
