const API = 'https://economia.awesomeapi.com.br/json/all';

// export const cambioAPI = () => (
//   fetch(`${ISS_BASE_API}`)
//     .then((response) => (
//       response
//         .json()
//         .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//     ))
// );

const cambioAPI = {
  getAll: () => fetch(API).then((resp) => resp.json),
};

export default cambioAPI;
