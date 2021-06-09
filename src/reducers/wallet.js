// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCY_SUCCESS } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCY_SUCCESS:
    return { ...state, ...payload };

  default:
    return state;
  }
};

export default wallet;
