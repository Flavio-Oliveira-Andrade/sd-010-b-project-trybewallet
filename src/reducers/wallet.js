// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_START,
} from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case REQUEST_START:
    return {
      ...state,
      isFetching: true,
    };

  default:
    return state;
  }
}
