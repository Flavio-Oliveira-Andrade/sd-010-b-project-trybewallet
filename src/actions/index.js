// Coloque aqui suas actions
export const actionEmail = (email) => ({ type: 'SAVE_USER', email });
export const API = (api) => ({ type: 'API', api });
export const TUNK = (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((response) => {
    dispatch(API(Object.keys(response)));
  });
