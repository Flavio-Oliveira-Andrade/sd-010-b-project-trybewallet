const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default user;
