// Esse reducer será responsável por tratar as informações da pessoa usuária

const defaultState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userReducer(state = defaultState, action) {
  switch (action.type) {
  case 'User':
    return state;
  default:
    return state;
  }
}

export default userReducer;
