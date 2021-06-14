// Coloque aqui suas actions
export const ADD_DESPESA = 'ADD_DESPESA';
export const USER_LOGIN = 'USER_LOGIN';
export const GET_COTATION = 'GET_COTATION';
export const REQUEST_API = 'REQUEST_API';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  user: {
    email,
  },
});

export const addDespesa = (state) => ({ type: ADD_DESPESA, state });
export const getCotation = (data) => ({ type: GET_COTATION, data });
export const requestAPI = () => ({ type: REQUEST_API });

// Contribuição Alessandra Rezende
export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((json) => {
          const { USDT, ...curr } = json;
          dispatch(getCotation(Object.keys(curr)));
        }));
  };
}
