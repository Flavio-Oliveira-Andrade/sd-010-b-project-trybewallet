export const LOGIN_INFO = 'login';

function loginAction({ userEmail, password }) {
  return ({
    type: LOGIN_INFO,
    payload: { userEmail, password },
  });
}

export default loginAction;
