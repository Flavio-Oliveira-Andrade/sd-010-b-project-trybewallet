// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL_LOGON':
    return {
      ...state,
      email: action.payload.email,
    };

  default:
    return state;
  }
}
export default user;
