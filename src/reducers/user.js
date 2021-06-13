// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const SAVE_USER = 'SAVE_USER';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default reducer;
