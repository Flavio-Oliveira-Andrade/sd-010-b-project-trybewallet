// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: 0,
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case '':
    return {};
  default:
    return state;
  }
}

export default wallet;
