const initialState = {
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return { ...state, email: action.value };
  default:
    return state;
  }
}

export default userReducer;
