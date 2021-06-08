// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITAL_STATE = ({
  user: {
    email: '',
  },
});

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case '':
    return ({
      ...state,
      user: {
        ...state.user,
        email: action.email,
      },
    });
  default:
    return state;
  }
};

export default userReducer;
