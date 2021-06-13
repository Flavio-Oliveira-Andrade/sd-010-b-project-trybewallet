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

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const getArrayCurrencies = (currenciesObj) => {
  const currenciesArray = [];
  const currencies = Object.keys(currenciesObj).filter((currency) => currency !== 'USDT');
  currencies.forEach((currency) => {
    currenciesArray.push({
      [currency]: currenciesObj[currency],
    });
  });
  console.log(currenciesArray);
  return currenciesArray;
};

const saveExpenseAction = (expense) => ({
  type: SAVE_EXPENSE,
  payload: {
    expense,
  },
});

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: {
    currencies,
  },
});

export const fetchCurrencies = () => {
  // console.log('estou dentro de fetchCurrencies');
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(getCurrencies(currencies)));
  };
};

export const saveExpense = (expense) => {
  return (dispatch) => {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => {
        const currenciesInformation = getArrayCurrencies(currencies);
        expense.exchangeRates = currenciesInformation;
        dispatch(saveExpenseAction(expense));
      });
  };
};

// dispatch(receiveCurrencies(currencies)));