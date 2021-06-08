const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default user;
