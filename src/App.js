import React from 'react';
import { Switch, Route } from 'react-router';
import login from './pages/Login';
// essa estrutura de Rotas faz aqui no APP.JS

function App() {
  return (
    <Switch>
      <Route path="/" component={ login } />
    </Switch>
  );
}

export default App;
