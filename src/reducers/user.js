const INITIAL_STATE = {
  email: '',
};

function userLoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { email: action.email };

  default:
    return state;
  }
}

export default userLoginReducer;
