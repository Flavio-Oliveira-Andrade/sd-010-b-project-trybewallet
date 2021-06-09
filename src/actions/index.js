// Coloque aqui suas actions
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const userLoginSuccessAction = (item) => ({
  type: USER_LOGIN_SUCCESS,
  payload: item,
});
