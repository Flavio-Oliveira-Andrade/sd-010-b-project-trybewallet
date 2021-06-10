// Coloque aqui suas actions
// import { getMoedas } from '../services/api';

export const actionAddEmailUser = (email) => ({
  type: 'ADD_USER',
  payload: {
    email,
  },
});

// export const actionAddExpenive = (expense) => ({
//   type: 'ADD_EXPENSE',
//   payload: {
//     expense,
//   },
// });

export const actionAddExpenive = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (response.json()))
    .then((json) => {
      console.log(expense, json);
      dispatch({
        type: 'ADD_EXPENSE',
        payload: {
          expense: { ...expense, exchangeRates: json },
        },
      });
    });
};

export const actionCalcTotal = () => ({
  type: 'CALC_TOTAL',
});

export const requestCurrencies = () => ({
  type: 'REQUEST',
  payload: {
    isFetching: true,
  },
});

export const requestCurrenciesSuccess = (json) => ({
  type: 'ADD_MOEDAS',
  payload: {
    currencies: json,
    currenciesData: json,
    isFetching: false,
  },
});

export const requestCurrenciesError = (error) => ({
  type: 'ERROR',
  payload: {
    error,
  },
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (response.json())
      .then((json) => {
        dispatch(requestCurrenciesSuccess(json));
      }))
    .catch((currenciesError) => {
      dispatch(requestCurrenciesError(currenciesError));
    });
};

export const requestCurrencieSuccess = (json) => ({
  type: 'ADD__CURRENCIE',
  payload: {
    currencies: json,
    isFetching: false,
  },
});

export const requestCurrencieError = (error) => ({
  type: 'ERROR_CURRENCIE',
  payload: {
    error,
  },
});

export const fetchCurrencie = (moeda) => (dispatch) => {
  console.log(moeda);
  fetch(`https://economia.awesomeapi.com.br/json/${moeda}-BRL`)
    .then((response) => (response.json())
      .then((json) => {
        dispatch(requestCurrencieSuccess(json));
      }))
    .catch((currenciesError) => {
      dispatch(requestCurrencieError(currenciesError));
    });
};
