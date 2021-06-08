// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW ACTION':
    return { ...state };
  default:
    return state;
  }
}

export default reducer;
