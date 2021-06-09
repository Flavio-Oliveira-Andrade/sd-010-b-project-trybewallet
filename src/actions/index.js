export function userLoginAction(email) {
  return { type: 'LOGIN', email };
}

function getApi(currencies) {
  return { type: 'GET_API', currencies };
}

export function requestMoedasApi(dataApi) {
  return (dispatch) => {
    dataApi.then((currencies) => dispatch(getApi(currencies)));
  };
}

export function addNewExpense(expense) {
  return { type: 'ADD_EXPENSE', expense };
}
