import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderRotes = this.renderRotes.bind(this);
  }

  renderRotes() {
    return (
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }

  render() {
    return <section>{this.renderRotes()}</section>;
  }
}

export default App;
