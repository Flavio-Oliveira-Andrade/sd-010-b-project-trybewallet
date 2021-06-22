// Coloque aqui suas actions
export const action = (state) => ({
  type: state.type,
  payload: state.payload,
});

// asynchronous action creator
export const fetchData = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((response) => dispatch({
    type: 'GET_CURRENCY',
    payload: response }))
  .catch((error) => dispatch({
    type: 'FAILED_REQUEST',
    payload: error }));
