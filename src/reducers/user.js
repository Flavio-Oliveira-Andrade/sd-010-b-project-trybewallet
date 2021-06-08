// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_SATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userReducer(state = INITIAL_SATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return { state: action.state };
  default:
    return state;
  }
}

export default userReducer;
