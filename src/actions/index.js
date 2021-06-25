const login = (value) => ({ type: 'LOGIN', payload: value });

export const removeExpense = (id) => ({ type: 'DELETE_EXP', id });

// export const editExp = (exp) => ({ type: 'EDIT_EXP', payload: { exp } });

export const apiSuccess = (rates, data) => ({
  type: 'SUCCESS_API',
  payload: {
    rates,
    ...data,
  },
});

export const requestFAIL = (error) => ({
  type: 'FAIL_REQUEST', payload: { error },
});

export const loadData = (data) => async (dispatch) => {
  try {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const promise = await api.json();
    dispatch(apiSuccess(promise, data));
  } catch (error) {
    dispatch(requestFAIL(error));
  }
};

export default login;
