// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const DEPOSIT = 'DEPOSIT';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case DEPOSIT:
    return { ...state, ...payload };

  default:
    return state;
  }
};

export default wallet;
