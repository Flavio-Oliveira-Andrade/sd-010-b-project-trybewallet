import React from 'react';
import { Switch, Route } from 'react-router';
import login from './pages/Login';
import Wallet from './pages/Wallet';
// essa estrutura de Rotas faz aqui no APP.JS

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ login } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>
  ); // o componente Wallet é o dentro de pages, com W maiúsculo. Não é o dentro de reducers com w minúsculo.
  // perdi 1 hora no REQ 4 porque não tinha colocado o exact antes do path. Era isso que não tava fazendo a rota dar certo quando colocava /carteira
}

export default App;
