import React from 'react';
import { Switch, Route } from 'react-router';
import login from './pages/Login';
import Wallet from './pages/Wallet';
// essa estrutura de Rotas faz aqui no APP.JS

function App() {
  return (
    <Switch>
      <Route path="/" component={ login } />
      <Route path="carteira" component={ Wallet } />
    </Switch>
  ); // o componente Wallet é o dentro de pages, com W maiúsculo. Não é o dentro de reducers com w minúsculo.
}

export default App;
