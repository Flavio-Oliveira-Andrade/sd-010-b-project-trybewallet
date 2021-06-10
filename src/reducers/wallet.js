// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_TOTAL } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_TOTAL:
    return { ...state, payload };

  default:
    return state;
  }
};
