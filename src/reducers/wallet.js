import { REQUEST_CURRENCIES, ADD_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  loading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loading: true };
  case ADD_CURRENCIES:
    return { ...state, loading: false, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
