export const action = (state) => ({
  type: state.type,
  payload: state.payload,
});

export const goFetch = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((resp) => resp.json())
  .then((resp) => dispatch({
    type: 'GET_CURRENCY',
    payload: resp }))
  .catch((err) => dispatch({
    type: 'FAILED_REQUEST',
    payload: err }));
