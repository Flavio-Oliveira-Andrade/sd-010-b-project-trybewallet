export const ADD_USER = 'ADD_USER';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIESS';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const logOn = (payload) => ({
  type: ADD_USER,
  payload,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  payload: {
    currencies,
  },
});

// https://blog.coderockr.com/posts/2016/requisicoes-assincronas-em-redux/
export function fetchApiCoin() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencie) => {
        delete currencie.USDT;
        dispatch(receiveCurrencies(currencie));
      });
  };
}

export const addCurrencies = (expenses) => ({
  type: ADD_CURRENCIES,
  payload: {
    expenses,
  },
});

export const fetchApi = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((resp) => {
      expense.exchangeRates = resp;
      dispatch(addExpenses(expense));
    });
};
