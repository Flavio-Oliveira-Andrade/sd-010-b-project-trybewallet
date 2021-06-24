export const LOGIN_USER = 'LOGIN_USER';
export const PASSWORD_LOGIN = 'PASSWORD_LOGIN';

export const handleUserLogin = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const passwordLogin = (payload) => ({
  type: PASSWORD_LOGIN,
  payload,
});
