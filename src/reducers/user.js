// Esse reducer será responsável por tratar as informações da pessoa usuária
const INNITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducerUser = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return { ...state, user: action.email };
  default:
    return state;
  }
};

export default reducerUser;
