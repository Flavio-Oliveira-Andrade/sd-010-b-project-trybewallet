import React from 'react';
import { Route, Switch } from 'react-router';
import Carteira from './components/Carteira';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/carteira" component={ Carteira } />
        <Route path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
