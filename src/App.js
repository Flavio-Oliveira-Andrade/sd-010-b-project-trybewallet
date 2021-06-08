import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import wallet from './reducers/wallet';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" compontent={ Login } />
        <Route exact path="/carteira" compontent={ wallet } />
      </Switch>
    </main>);
}

export default App;
