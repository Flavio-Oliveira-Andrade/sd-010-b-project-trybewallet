// Coloque aqui suas actions
export const verifyLogin = (user) => ({
  type: 'VERIFY_LOGIN',
  payload: {
    user,
  },
});
const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
/* const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES'; */
const GET_CURRENCIES = 'GET_CURRENCIES';
const SAVE_EXPENSE = 'SAVE_EXPENSE';
const DELETE_EXPENSE = 'DELETE_EXPENSE';

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const getArrayCurrencies = (currenciesObj) => {
  const currenciesArray = [];
  const currencies = Object.keys(currenciesObj).filter((currency) => currency !== 'USDT');
  currencies.forEach((currency) => {
    currenciesArray.push({
      [currency]: currenciesObj[currency],
    });
  });
  // console.log(currenciesArray);
  return currenciesArray;
};

const saveExpenseAction = (expense) => ({
  type: SAVE_EXPENSE,
  payload: {
    expense,
  },
});

export const deleteExpenseAction = (expenseDeleted) => {
  // console.log('dentro de deleteExpenseAction');
  console.log(expenseDeleted);
  return ({
    type: DELETE_EXPENSE,
    payload: expenseDeleted,
  });
};

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: {
    currencies,
  },
});

export const fetchCurrencies = () => (
  (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(getCurrencies(currencies)));
  });

export const saveExpense = (expense) => (
  (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => {
        // const currenciesInformation = getArrayCurrencies(currencies);
        expense.exchangeRates = currencies;
        dispatch(saveExpenseAction(expense));
      }))
);
