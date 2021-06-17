// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export function wallet(despesa) {
  return ({
    type: 'USER_LOGIN',
    despesa,
  });
}
