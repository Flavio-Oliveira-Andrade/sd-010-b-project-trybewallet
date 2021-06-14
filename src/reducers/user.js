import { SAVE_USER_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER_INFO:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default user;
