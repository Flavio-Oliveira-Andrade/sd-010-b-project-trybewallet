import React from 'react';
import { Route } from 'react-dom';

function App() {
  return (
    <main>
      <switch>
        <Route exact path="/" />
      </switch>
    </main>);
}

export default App;
