// Coloque aqui suas actions
export const login = (value) => ({ type: 'LOGIN', value });

export const requestAPI = () => ({ type: 'REQUEST_API' });
export const getData = (data) => ({ type: 'GET_DATA', data });

export function FetchApi() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      // console.log(response);
      const data = await response.json();
      // const batata = data.map((info) => console.log(info));
      // const batata = await data.then((bolo) => bolo.map((pao) => pao.code));
      // const arroz = batata;
      dispatch(getData(Object.keys(data)));
    } catch (error) {
      console.error(error);
    }
  };
}
