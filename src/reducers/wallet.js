// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { bindActionCreators } from "redux";

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case '':
    // return { ...state, ...payload };
    return state;

  default:
    return state;
  }
};
