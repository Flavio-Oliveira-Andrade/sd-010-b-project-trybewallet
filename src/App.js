import React from 'react';
import { Router } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return(
    <Router exact path="/">{ Login }</Router>
  );
}

export default App;
