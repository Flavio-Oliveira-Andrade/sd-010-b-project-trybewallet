export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';

export const REQUEST_API = 'REQUEST_API';

export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const UPDATE_EXCHANGE = 'UPDATE_EXCHANGE';

export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const submitEmail = (email) => ({ type: SUBMIT_EMAIL, email });

// export const requestCurrencies = () => ({ type: REQUEST_API });

export const getCurrencies = (currencies) => ({ type: SAVE_CURRENCIES, currencies });

export const updateExchangeRates = (exchangeRates) => ({
  type: UPDATE_EXCHANGE,
  exchangeRates,
});

export const submitExpense = (expense) => ({ type: SAVE_EXPENSES, expense });

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });

export function fetchAPI(requirement) {
  // dispatch(requestCurrencies());
  if (requirement === 'getExchanges') {
    return async (dispatch) => {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const response = await request.json();
      dispatch(updateExchangeRates(response));
    };
  }

  if (requirement === 'getCurrencies') {
    return async (dispatch) => {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const response = await request.json();
      const responseValues = Object.values(response);
      const currenciesCode = responseValues.reduce((prev, curr) => {
        const codes = prev;
        return curr.codein !== 'BRLT' ? codes.concat(curr.code) : codes;
      }, []);
      dispatch(getCurrencies(currenciesCode));
    };
  }
}
