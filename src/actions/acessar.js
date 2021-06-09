import LOGIN_USER from '.';

const acessar = () => ({
  type: LOGIN_USER,
  payload: {
    email: '',
  },
});

export default acessar;
