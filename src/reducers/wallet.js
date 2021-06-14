// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_DESPESA } from '../actions';

const INITIAL_STATE = {
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_DESPESA:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.state,
        },
      ],
    };
  default:
    return state;
  }
}

export default walletReducer;
