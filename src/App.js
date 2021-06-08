import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import Carteira from './components/Carteira';

function App() {
  return (
    <>
      <Route path="/" component={ Login } />
      <Route path="/carteira" component={ Carteira } />
    </>
  );
}

export default App;
