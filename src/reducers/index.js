// import user from './user';
// import wallet from './wallet';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default listReducer;
