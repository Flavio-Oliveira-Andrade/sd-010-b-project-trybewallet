// Coloque aqui suas actions
export const ADD_DESPESA = 'ADD_DESPESA';
export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  user: {
    email,
  },
});

export const addDespesa = (state) => ({ type: ADD_DESPESA, state });
