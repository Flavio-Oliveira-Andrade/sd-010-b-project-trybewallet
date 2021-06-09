// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.value,
    };

  default:
    return state;
  }
};

export default user;
