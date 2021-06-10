import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div>Hello, TrybeWallet!</div>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
