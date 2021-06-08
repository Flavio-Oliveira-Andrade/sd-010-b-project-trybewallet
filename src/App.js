import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <div>Bolado</div> } />
      </Switch>
    );
  }
}

export default App;
