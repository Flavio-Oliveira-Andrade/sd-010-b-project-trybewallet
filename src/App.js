import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Edition from './pages/Edition';
import NotFound from './components/NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderRotes = this.renderRotes.bind(this);
  }

  renderRotes() {
    return (
      <Switch>
        <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
        <Route path="/edition" render={ (props) => <Edition { ...props } /> } />
        <Route path="/notfound" render={ (props) => <NotFound { ...props } /> } />
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
    );
  }

  render() {
    return <section>{this.renderRotes()}</section>;
  }
}

export default App;
