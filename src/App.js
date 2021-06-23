import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={ Home } />
      </div>
    );
  }
}

export default App;
