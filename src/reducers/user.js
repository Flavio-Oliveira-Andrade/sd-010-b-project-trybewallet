const initialState = {
  email: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ('USER_LOGIN'): {
    const email = action.payload;
    return {
      ...state,
      email,
    };
  }
  default:
    return state;
  }
}
