import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loguin from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Trybe Wallet!</h1>
        <Switch>
          <Route exact path="/" component={ Loguin } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </main>
    );
  }
}

export default App;
