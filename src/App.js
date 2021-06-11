import React from 'react';
import { Route, Switch } from 'react-router';
import EditExpense from './components/EditExpense';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route
        path="/carteira/:id/edit"
        render={ (props) => <EditExpense { ...props } /> }
      />
      <Route path="/carteira" component={ Wallet } />
      {/*
      <Route path="/register" component={ Register } />
      <Route path="/clients" component={ Clients } /> */}
    </Switch>
  );
}

export default App;
