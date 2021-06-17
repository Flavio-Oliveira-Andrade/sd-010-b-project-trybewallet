import fetchInformation from '../services';

const PRE_ID = -1;
let nextExpenseId = PRE_ID;

export const addExpense = (content) => ({
  type: 'add-expense',
  payload: content,
});

export const dispatchExpense = (expenseInformation) => async (dispatch) => {
  const exchangeRates = await fetchInformation();
  const expense = {
    id: nextExpenseId += 1,
    ...expenseInformation,
    exchangeRates,
  };
  dispatch(addExpense(expense));
};

export const redirectCarteira = (email) => ({
  type: 'redirect-carteira',
  payload: {
    email,
  },
});

export const requestFetchSuccess = (resolve) => ({
  type: 'request-success',
  payload: {
    currencies: resolve,
  },
});

export const requestFetchError = (reject) => ({
  type: 'request-error',
  payload: { reject },
});

export const fetchOnComponentDidMount = () => (dispatch) => {
  fetchInformation()
    .then((response) => {
      dispatch(requestFetchSuccess(response));
    })
    .catch((error) => dispatch(requestFetchError(error)));
};
