import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <Route path="/carteira" component={ Wallet } />
      <Route exact path="/" component={ LoginPage } />
    </>
  );
}

export default App;
