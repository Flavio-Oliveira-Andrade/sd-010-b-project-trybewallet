// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCY_INITIAL_SUCCESS,
  REQUEST_EXCHANGE_RATES_SUCCESS,
  ADD_EXPENSE,
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
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY_INITIAL_SUCCESS:
    return { ...state, ...action.payload };

  case REQUEST_EXCHANGE_RATES_SUCCESS:
    return { ...state, ...action.payload };

  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };

  default:
    return state;
  }
};

export default wallet;
