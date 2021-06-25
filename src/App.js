import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
// import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      {/* <Route path="/carteira" component={ Wallet } /> */}
    </Switch>
  );
}

export default App;
