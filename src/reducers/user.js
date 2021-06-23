const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
}
