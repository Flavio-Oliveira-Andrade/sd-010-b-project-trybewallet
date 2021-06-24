// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCY } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => { // action desconstruction
  switch (type) {
  case CURRENCY:
    return {
      ...state,
      currencies: payload.filtered,
    };
  default:
    return state;
  }
};
