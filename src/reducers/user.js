// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE-EMAIL':
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
};

export default userReducer;
