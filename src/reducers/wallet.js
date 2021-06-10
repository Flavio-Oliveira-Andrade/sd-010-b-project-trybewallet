const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'outra':
    return {
      ...INITIAL_STATE,
      expenses: action.state };
  default:
    return state;
  }
}

export default wallet;
