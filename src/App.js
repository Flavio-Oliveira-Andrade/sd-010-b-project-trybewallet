import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Route exact path="/" component={ LoginPage } />
  );
}

export default App;
