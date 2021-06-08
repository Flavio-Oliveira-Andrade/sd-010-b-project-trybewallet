const LOGIN = 'login';

function login({ userName, password }) {
  return ({
    type: LOGIN,
    payload: { userName, password },
  });
}
export default login;
