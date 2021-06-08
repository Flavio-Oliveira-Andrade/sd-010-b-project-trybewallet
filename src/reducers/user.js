const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case '':
    return state;

  default:
    return state;
  }
}
