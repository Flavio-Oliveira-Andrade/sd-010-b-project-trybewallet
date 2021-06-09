import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Carteira from './components/Carteira';
import NotFound from './components/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carteira" component={ Carteira } />
        <Route default component={ NotFound } />
      </Switch>
    );
  }
}
export default App;
