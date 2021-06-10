// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_WALLET } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  // console.log(state.expenses.concat(action.payload));
  switch (action.type) {
  case REQUEST_WALLET:
    return {
      expenses: state.expenses.concat(action.payload),
    };
  default:
    return state;
  }
}

export default wallet;
