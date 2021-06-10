import fetchCambioApi from '../services/fetchCambioApi';

export const LOGIN = 'LOGIN';
export const REQUEST_CAMBIO = 'REQUEST_CAMBIO';

export function login(email, password) {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
    },
  };
}

const cambioAPI = (data = '') => ({
  type: REQUEST_CAMBIO,
  payload: data,
});

export function fetchCambio() {
  return (dispatch) => fetchCambioApi().then((resp) => dispatch(cambioAPI(resp)));
}
