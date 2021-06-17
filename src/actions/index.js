// Coloque aqui suas actions

import getCurrencies from '../services/currenciesAPI';

export const inputEmail = (state) => (
  { type: 'INPUT_EMAIL', payload: { email: state } }
);

export const inputPassword = (state) => (
  { type: 'INPUT_PASSWORD', payload: { password: state } }
);

export const addExpense = (expenses) => ({
  type: 'ADD_EXPENSE',
  payload: {
    expenses,
  },
});

export const fetchingCurrencies = () => ({
  type: 'FETCHING_CURRENCIES',
  payload: {
    isFetching: true,
  },
});

export const requestCurrencies = (currencies) => ({
  type: 'REQUEST_CURRENCIES',
  payload: {
    currencies: Object.keys(currencies),
    isFetching: false,
  },
});

export const requestExchanges = (exchangeRates) => ({
  type: 'ADD_EXCHANGES',
  payload: {
    exchangeRates,
    isFetching: false,
  },
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(fetchingCurrencies());
  const currencies = await getCurrencies();
  delete currencies.USDT;
  dispatch(requestCurrencies(currencies));
};

export const fetchExchange = (state) => async (dispatch) => {
  dispatch(fetchingCurrencies());
  const currencies = await getCurrencies();
  state.exchangeRates = currencies;
  dispatch(addExpense(state));
};
