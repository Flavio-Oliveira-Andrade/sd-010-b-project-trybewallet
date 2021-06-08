import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route to="/" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
