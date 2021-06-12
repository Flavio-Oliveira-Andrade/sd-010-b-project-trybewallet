// Coloque aqui suas actions
// export const addRegister = (value) => ({ type: 'ADD_REGISTER', data: value });

export const loginAction = (state) => ({
  type: state.type,
  payload: state.payload,
});

export const getInApi = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((response) => dispatch({
    type: 'GET_CURRENCY',
    payload: response }))
  .catch((error) => dispatch({
    type: 'FAILED_REQUEST',
    payload: error }));
