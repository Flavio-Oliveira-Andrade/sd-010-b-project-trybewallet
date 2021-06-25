// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADDEMAIL } from '../actions/index';

const initialState = {
  email: '',
};

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
  case ADDEMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}
