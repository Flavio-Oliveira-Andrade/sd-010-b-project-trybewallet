const USER_INITIAL_STATE = {
  email: '',
};

function user(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      email: action.email,
    };

  default:
    return state;
  }
}

export default user;
