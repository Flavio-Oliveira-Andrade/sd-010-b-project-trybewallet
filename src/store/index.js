import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { initialStateWithExpenses } from '../tests/mockData';

const store = createStore(rootReducer, initialStateWithExpenses, composeWithDevTools(applyMiddleware(thunk)));

export default store;
