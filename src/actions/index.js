// Coloque aqui suas actions
export const addUser = (email) => ({
  type: 'ADD_USER',
  payload: {
    email,
  },
});

export const receiveCurrencies = (currencies) => ({
  type: 'RECEIVE_CURRENCIES',
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

export const addExpenses = (expenses) => ({
  type: 'ADD_EXPENSES',
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

export const dellExpense = (deleteExpense) => ({
  type: 'DELL_EXPENSE',
  payload: deleteExpense,
});
