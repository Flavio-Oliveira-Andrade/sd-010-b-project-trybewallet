import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ Login } />
          <Route exact path="/carteira" component={ Wallet } />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
