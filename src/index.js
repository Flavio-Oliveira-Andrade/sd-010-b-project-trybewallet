import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import indexStore from './store/indexStore';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ indexStore }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
