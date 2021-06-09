const USER_INITIAL_STATE = {
  user: {
    email: '',
  }
};

function user(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      email: action.payload,
    };

  default:
    return state;
  }
}

export default user;
