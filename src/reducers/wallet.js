import { REQUEST_API, GET_COTATION, ADD_EXPENSE } from '../actions';

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
  case ADD_EXPENSE:
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
  default:
    return state;
  }
}

export default walletReducer;
