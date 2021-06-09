const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'login':
    return { email: action.state };
  default:
    return state;
  }
}

export default user;
