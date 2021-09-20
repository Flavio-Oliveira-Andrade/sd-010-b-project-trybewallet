// action para requisitar API E APRESENTAR MOEDAS
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const requestAPI = () => ({ type: REQUEST_API });
export const getCurrency = (data) => ({ type: GET_CURRENCY, data });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((data) => dispatch(getCurrency(data))));
  };
}

// action de adição de usuário após login
export const ADD_USER = 'ADD_USER';

const userInput = (email) => ({
  type: ADD_USER,
  email,
});

export default userInput;

// action para salvar despesas
export const addExpenses = (expenses, cotation) => ({
  type: ADD_EXPENSES,
  expenses: {
    ...expenses,
    exchangeRates: cotation,
  },
});

export const deleteExpenses = (expenses, id) => ({
  type: DELETE_EXPENSES,
  expenses: {
    ...expenses,
    id,
  },
});

export function fetchPrice(expense) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const cotation = await response.json();
      dispatch(addExpenses(expense, cotation));
    } catch (error) {
      console.error(error);
    }
  };
}

// dispatch(addExpenses(expense, objCurrency));
