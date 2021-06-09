import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loguin from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Loguin } />
          <Route exact path="/carteira" component={ Wallet } />
        </Switch>
      </main>
    );
  }
}

export default App;
