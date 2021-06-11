import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Header } />
      </Switch>
    );
  }
}

export default App;
