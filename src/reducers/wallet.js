// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, GET_COTATION, ADD_DESPESA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  case GET_COTATION:
    return {
      ...state,
      loading: false,
      currencies: action.data,
      simpleCurrencies: action.simpleData,
    };
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
