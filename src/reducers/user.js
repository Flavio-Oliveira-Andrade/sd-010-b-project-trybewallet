// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialstate = {
  email: '',
};
const userReducer = (state = initialstate, action) => {
  switch (action.type) {
  case '':
    return {};
  default:
    return state;
  }
};
export default userReducer;
