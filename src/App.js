import React from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>

      <switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        {/* <Route path="/about" component={ About } /> */}
      </switch>
    </div>);
}

export default App;
