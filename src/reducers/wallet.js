import { MOEDA, DESPESA, EXCLUIR } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case MOEDA:
    return {
      ...state,
      currencies: payload,
    };
  case DESPESA:
    return {
      ...state,
      expenses: payload,
    };
  case EXCLUIR: {
    return {
      ...state,
      expenses: state.expenses.filter((elem, index) => index !== payload.index),
    };
  }

  default:
    return state;
  }
};
