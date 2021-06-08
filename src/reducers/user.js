const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case '':
    return {};
  default:
    return state;
  }
};

export default user;
