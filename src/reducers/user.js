// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = {
  user: {
    email: '',
  },

};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.email };

  default:
    return state;
  }
};

export default userReducer;
