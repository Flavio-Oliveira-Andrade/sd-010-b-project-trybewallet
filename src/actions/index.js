export const LOGIN_INFO = 'login';

function loginAction({ userEmail, userPassword }) {
  return ({
    type: LOGIN_INFO,
    payload: { userEmail, userPassword },
  });
}

export default loginAction;
