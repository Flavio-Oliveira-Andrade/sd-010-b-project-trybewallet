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
  // case REQUEST_START:
  //   return {
  //     ...state,
  //     isFetching: true,
  //   };
  // case REQUEST_SUCCESS:
  //   return {
  //     ...state,
  //     isFetching: false,
  //     currencies: [...Object.keys(action.currencies)],
  //   };
  // case REQUEST_FAIL:
  //   return { ...state, isFetching: false, error: action.error };
  // case SAVE_EXPENSE:
  //   return {
  //     ...state,
  //     expenses: [...state.expenses, action.expenses],
  //   };

  default:
    return state;
  }
}
