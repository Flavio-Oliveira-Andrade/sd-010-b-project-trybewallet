import React from 'react';
import { Route } from 'react-dom';
import Login from './pages/Login';

function App() {
  return (
    <main>
      <switch>
        <Route exact path="/" compontent={ Login } />
      </switch>
    </main>);
}

export default App;
