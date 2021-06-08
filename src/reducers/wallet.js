// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, GET_COTATION, ADD_DESPESA, DEL_ITEM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
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
    };
  case ADD_DESPESA:
    return {
      ...state,
      loading: false,
      expenses: [
        ...state.expenses,
        {
          ...action.state,
          exchangeRates: state.currencies,
        },
      ],
    };
  case DEL_ITEM:
    return {
      ...state,
      // O filter cria um novo array, eliminando o id excluído. Com as {}, criaria outro objeto, o que não é o caso.
      // Explicação pelo Henrique Clementino
      expenses: state.expenses.filter((item) => item.id !== action.id),
    };
  default:
    return state;
  }
}

export default walletReducer;
