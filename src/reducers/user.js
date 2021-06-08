// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER } from '../actions/index';

const initialState = {
  user: {
    email: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER:
    return action.payload.name;
  default:
    return state;
  }
};

export default userReducer;
