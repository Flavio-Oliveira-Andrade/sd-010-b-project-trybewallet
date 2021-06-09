const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function rootReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default rootReducers;
