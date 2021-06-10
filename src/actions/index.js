export const ADD_USER = 'ADD_USER';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

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

export const fetchApi = () => (dispatch) => {
  dispatch(requestApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then((sucess) => {
      dispatch(requestApiSuccess(sucess));
    })
    .catch((erro) => {
      dispatch(requestApiError(erro));
    });
};
