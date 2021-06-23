import LOGIN from '../actions/index';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = { email: '', password: '', enableButton: false };

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return ({
      ...state,
    });

  default:
    return state;
  }
};

export default user;
