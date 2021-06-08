import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/clients" component={ Clients } /> */}
    </Switch>
  );
}

export default App;
