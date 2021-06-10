// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(`reducer:${action.payload?.user}`);
  switch (action.type) {
  case 'VERIFY_LOGIN':
    return {
      ...action.payload.user,
    };
  default:
    return state;
  }
};

export default userReducer;
