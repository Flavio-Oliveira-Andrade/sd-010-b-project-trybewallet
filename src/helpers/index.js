

//função para mokar testes em Redux assincronos

import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux;


//__________________________________________________________________________
// Função para mokar testes em Redux sincronos 
//

import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

//_______________________________________________________________________________
// Função para usar em testes de Redux com Router

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../reducers';

const renderWithRouterAndRedux = (
  component,
  {
    initialEntries = ['/'],
    initialState,
    store = createStore(rootReducer, initialState),
  } = {},
) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          {component}
        </Provider>
      </Router>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;



//codigo usado na store para usar o thunk e a extensão DevTools Redux

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : (...args) => {
      if (args.length === 0) return undefined;
      if (typeof args[0] === 'object') return compose;
      return compose(...args);
    }
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;

// codico simples para uso da extensão
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);