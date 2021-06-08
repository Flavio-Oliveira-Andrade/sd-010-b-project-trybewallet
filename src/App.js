import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loguin from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Trybe Wallet!</h1>
        <Switch>
          <Route path="/" component={ Loguin } />
        </Switch>
      </main>
    );
  }
}

export default App;
