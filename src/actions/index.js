import fetchApiFunction from '../cotacaoAPI';

export function loginAction(email) {
  return {
    type: 'LOGIN_ACTION',
    payload: {
      email,
    },
  };
}

export function walletAction(expense) {
  return {
    type: 'WALLET_ACTION_ADD_EXPENSE',
    payload: {
      expense,
    },
  };
}

export function actionRequestAPI() {
  return {
    type: 'GET_CURRENCIES_API',
    payload: {
      isFetching: true,
    },
  };
}

export function actionRequestSuccess(currenciesData) {
  return {
    type: 'GET_CURRENCIES_SUCCESS',
    payload: {
      currenciesData,
      isFetching: false,
    },
  };
}

export function actionRequestError(error) {
  return {
    type: 'GET_CURRENCIES_ERROR',
    payload: {
      error,
      isFetching: false,
    },
  };
}

export const actionThunk = () => (dispatch) => {
  dispatch(actionRequestAPI());
  fetchApiFunction()
    .then((currenciesResponse) => dispatch(
      actionRequestSuccess(currenciesResponse),
    ))
    .catch((currenciesError) => dispatch(
      actionRequestError(currenciesError),
    ));
};
