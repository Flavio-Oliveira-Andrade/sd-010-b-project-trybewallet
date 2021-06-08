// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  user: {
    email: '',
  },
};

export default (state = initialState, { type }) => {
  switch (type) {
  case '':
    // return { ...state, ...payload };
    return state;
  default:
    return state;
  }
};
