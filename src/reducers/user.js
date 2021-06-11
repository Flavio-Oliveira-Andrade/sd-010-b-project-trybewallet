const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function saveUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return {
      ...state.user,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default saveUser;
