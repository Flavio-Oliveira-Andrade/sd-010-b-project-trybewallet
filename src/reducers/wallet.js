import { RECEIVE_COINS } from '../actions';

const INITIAL_STATE = {
  coins: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_COINS:
    return {
      ...state,
      coins: action.payload.coin,
    };
  default:
    return state;
  }
};

export default wallet;
