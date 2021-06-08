const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, { type }) {
  switch (type) {
  case '':
    return '';
  default:
    return state;
  }
}

export default wallet;
