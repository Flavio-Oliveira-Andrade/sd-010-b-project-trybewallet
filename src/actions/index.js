// Coloque aqui suas actions
export const USERLOGIN = 'user_Login';

export default function userLogin(values) {
  return {
    type: USERLOGIN,
    payload: values,
  };
}
