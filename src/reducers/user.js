import { LOGAR } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case LOGAR:
    return {
      ...state,
      email: payload.email,
    };
  case 'outra coisa':
    return state;
  default:
    return state;
  }
}

export default userReducer;
