const login = (value) => ({ type: 'LOGIN', payload: value });

export const removeExpense = (id) => ({ type: 'DELETE_EXP', payload: { id } });

export const editExp = (exp) => ({ type: 'EDIT_EXP', payload: { exp } });

export const apiSuccess = (rates, data) => ({
  type: 'SUCCESS_API',
  payload: {
    rates,
    ...data,
  },
});

export const loadData = (data) => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const promise = await api.json();
  dispatch(apiSuccess(promise, data));
};

export default login;
