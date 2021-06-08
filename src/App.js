import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ Login } />
      </BrowserRouter>
    </div>
  );
}

export default App;
