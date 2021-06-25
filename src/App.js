import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

import WalletProvider from './context/walletProvider';

import './css/App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <WalletProvider>
        <Route path="/carteira" component={ Wallet } />
      </WalletProvider>
    </Switch>
  );
}

export default App;
