import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/carteira">
        <Wallet />
      </Route>
    </div>
  );
}

export default App;
