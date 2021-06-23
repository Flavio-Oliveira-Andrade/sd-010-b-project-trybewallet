const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
}
