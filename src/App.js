import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Edition from './pages/Edition';
import NotFound from './components/NotFound';

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
        <Route path="/edition" component={ Edition } />
        <Route path="/notfound" component={ NotFound } />
        <Route exact path="/" component={ Login } />
        <Route component={ NotFound } />
      </Switch>
    );
  }

  render() {
    return <section>{this.renderRotes()}</section>;
  }
}

export default App;
