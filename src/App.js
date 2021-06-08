import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './css/App.css';

function App() {
  return (
    <>
      <div className="hello-trybe">Hello, TrybeWallet!</div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </>
  );
}

export default App;
