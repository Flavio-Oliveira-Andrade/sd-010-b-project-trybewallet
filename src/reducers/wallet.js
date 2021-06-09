const INITIAL_STATE = {
  email: '',
  password: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'login':
    return { state: action.state };
  default:
    return state;
  }
}

export default wallet;
