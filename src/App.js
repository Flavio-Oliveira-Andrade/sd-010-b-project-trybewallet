import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/carteira" component={ Wallet } />
          {/* <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } /> */}
          <Route exact path="/" component={ Login } />
          {/* <Route component={ NotFound } /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
