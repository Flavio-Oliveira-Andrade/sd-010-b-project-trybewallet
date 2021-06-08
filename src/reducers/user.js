// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = [];
const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return '';

  default:
    return state;
  }
};

export default userReducer;
