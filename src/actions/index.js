// Coloque aqui suas actions
export const login = (value) => ({ type: 'LOGIN', value });

export const requestAPI = () => ({ type: 'REQUEST_API' });
export const getData = (data) => ({ type: 'GET_DATA', data });
export const getExpenses = (data) => ({ type: 'EXPENSES', data });

export function FetchApi(requirement) {
  if (requirement === 'fetch') {
    return async (dispatch) => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/all');
        const data = await response.json();
        dispatch(getExpenses(data));

        // await response.json().then((data) => dispatch(getExpenses(Object.keys(data))));
      } catch (error) {
        console.error(error);
      }
    };
  }
  if (requirement === 'fetchApi') {
    return async (dispatch) => {
      try {
        dispatch(requestAPI());
        const response = await fetch('https://economia.awesomeapi.com.br/json/all');

        const data = await response.json();

        dispatch(getData(data));
      } catch (error) {
        console.error(error);
      }
    };
  }
}
