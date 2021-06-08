import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import wallet from './reducers/wallet';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ wallet } />
      </Switch>
    </main>);
}

export default App;
