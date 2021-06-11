// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCY_INITIAL_SUCCESS,
  REQUEST_EXCHANGE_RATES_SUCCESS,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  MODIFY_EXPENSE,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [
    // {
    //   id: 0,
    //   value: '10',
    //   currency: 'USD',
    //   method: 'Cartão de crédito',
    //   tag: 'Lazer',
    //   description: 'Dez dólares',
    //   exchangeRates: mockData,
    // },
    // {
    //   id: 1,
    //   value: '20',
    //   currency: 'EUR',
    //   method: 'Cartão de débito',
    //   tag: 'Trabalho',
    //   description: 'Vinte euros',
    //   exchangeRates: mockData,
    // },
  ],
  exchangeRates: {},
  defaultValues: {
    currency: 'USD',
    description: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    value: '0',
  },
  toModify: {},
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY_INITIAL_SUCCESS:
    return { ...state, ...action.payload };

  case REQUEST_EXCHANGE_RATES_SUCCESS:
    return { ...state, ...action.payload };

  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].filter(
        ({ id }) => id !== parseInt(action.payload, 10),
      ),
    };

  case MODIFY_EXPENSE:
    return {
      ...state,
      toModify: state.expenses.find(
        ({ id }) => id === parseInt(action.payload, 10),
      ),
    };

  default:
    return state;
  }
};

export default wallet;
