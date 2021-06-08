import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route default component={ NotFound } />
      </Switch>
    );
  }
}
export default App;
