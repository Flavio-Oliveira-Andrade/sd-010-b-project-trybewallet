import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component{
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login {...props} /> } />
        <Route path="/carteira" render={ () => <Wallet /> } />
      </Switch>
    );
  }
}

export default App;
