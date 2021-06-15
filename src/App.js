import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import store from './Store/index';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Switch>
          <Route path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </Provider>
    );
  }
}

export default App;
