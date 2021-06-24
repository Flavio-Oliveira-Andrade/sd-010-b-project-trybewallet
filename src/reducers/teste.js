import { ADDEMAIL } from '../actions/index';

const initialState = {
  email: [],
};

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
  case ADDEMAIL:
    return {
      ...state,
      email: [...state.email].push(action.payload.email),
    };
  default:
    return state;
  }
}
