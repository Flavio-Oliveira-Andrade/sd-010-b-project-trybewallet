export const login = (value) => ({ type: 'LOGIN', data: value });

export const addExpense = (value) => ({ type: 'REGISTER_EXPENSE', data: value });

export const addExchangeRate = (data) => async (dispatch) => {
  const response = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
  dispatch(addExpense({
    ...data,
    exchangeRates: response,
  }));
};

export const watchExpense = (value) => ({ type: 'WATCH_VALUE', data: value });
