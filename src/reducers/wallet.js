// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_DESPESA, GET_COTATION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
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
  case GET_COTATION:
    return {
      ...state,
      currencies: action.data,
    };
  default:
    return state;
  }
}

export default walletReducer;
