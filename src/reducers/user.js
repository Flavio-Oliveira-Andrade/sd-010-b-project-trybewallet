const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'redirect-carteira':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default userReducer;
