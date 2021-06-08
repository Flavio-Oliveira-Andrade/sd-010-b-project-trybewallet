import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={ Login } />
      </Switch>
    </Router>
  );
}

export default App;
