import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <header> Header </header>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
