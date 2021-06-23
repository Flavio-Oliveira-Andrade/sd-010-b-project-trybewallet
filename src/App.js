import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={ Home } />
        <Route path="/carteira" component={ Wallet } />
      </div>
    );
  }
}

export default App;
