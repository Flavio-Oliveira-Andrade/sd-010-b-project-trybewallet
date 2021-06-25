import { CURRENCY, FAILED_REQUEST, ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from '.';

const filterCurrencies = (json) => { // I get helped by the Fabio's PR: https://github.com/tryber/sd-010-b-project-trybewallet/blob/fabio-marturano-project-trybewallet/src/actions/fetchCurrAction.js
  const filtered = Object
    .keys(json).filter((currency) => currency !== 'USDT' && currency !== 'DOGE');

  return { type: CURRENCY, payload: { filtered } };
};

const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: { error } });

export const fetchCurrencies = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((apiResponse) => apiResponse.json()
      .then(
        (json) => dispatch(filterCurrencies(json)),
        (error) => dispatch(failedRequest(error)),
      ));
};

export const addExpense = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json()
      .then((exchangeRates) => dispatch({
        type: ADD_EXPENSE,
        payload: { ...expense, exchangeRates },
      })));
};

export const deleteExpense = (expenseID) => ({ // https://github.com/tryber/sd-010-b-project-trybewallet/blob/ee7a721aa351abda4eec2042c2ca0fd05507bccf/src/actions/index.js#L77
  type: DELETE_EXPENSE,
  payload: expenseID,
});

export const editExpense = (expenseID) => ({ // https://github.com/tryber/sd-010-b-project-trybewallet/blob/ee7a721aa351abda4eec2042c2ca0fd05507bccf/src/actions/index.js#L77
  type: EDIT_EXPENSE,
  payload: expenseID,
});
