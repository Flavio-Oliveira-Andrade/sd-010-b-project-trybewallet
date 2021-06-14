export const ADD_USER = 'ADD_USER';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';

export const requestAddUser = (email) => ({
  type: ADD_USER,
  payload: {
    email,
  },
});

export const requestApi = () => ({
  type: REQUEST_API,
  payload: {
    loading: true,
  },
});

export const requestApiSuccess = (data) => ({
  type: REQUEST_API_SUCCESS,
  payload: {
    currencies: Object.keys(data),
    loading: false,
  },
}
);

export const requestApiError = (error) => ({
  type: REQUEST_API_ERROR,
  payload: {
    error,
    loading: false,
  },
});

export const requestExpenses = (expense) => ({
  type: REQUEST_EXPENSES,
  payload: {
    expense,
  },
});

export const fetchApi = () => (
  async (dispatch) => {
    dispatch(requestApi());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(requestApiSuccess(data));
    } catch (error) {
      dispatch(requestApiError(error));
    }
  }
);
