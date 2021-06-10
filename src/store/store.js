import { createStore } from 'redux';
import mergedReducers from '../reducers/index';

const store = createStore(mergedReducers);

export default store;
