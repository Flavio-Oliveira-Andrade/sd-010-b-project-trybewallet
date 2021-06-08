const USER_INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return { state: action.state };

  default:
    return state;
  }
}

export default user;
