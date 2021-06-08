// Esse reducer será responsável por tratar as informações da pessoa usuária
const LOGIN = 'LOGIN';

const initialState = {
  email: '',
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case LOGIN:
    return { ...state, ...payload };

  default:
    return state;
  }
};

export default user;
