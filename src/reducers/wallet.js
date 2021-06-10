// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API,
  GET_COTATION, ADD_DESPESA, DEL_ITEM, EDITA_ITEM, UPDATE_ITEM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  currencies2: [],
  expenses: [],
  loading: false,
  editing: false,
  state: {},
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
      currencies2: action.data2,
    };
  case ADD_DESPESA:
    return {
      ...state,
      loading: false,
      editing: false,
      expenses: [
        ...state.expenses,
        {
          ...action.state,
          exchangeRates: state.currencies2,
        },
      ],
    };
  case EDITA_ITEM:
    return {
      ...state,
      editing: action.edit,
      state: action.state,
    };
  case UPDATE_ITEM:
    return {
      ...state,
      expenses: state.expenses.map((item) => (item.id === action.state.id
        ? { ...item, ...action.state } : item)),
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
