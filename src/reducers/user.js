const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, { type }) {
  switch (type) {
  case 'A':
    return '';
  default:
    return state;
  }
}

export default user;
