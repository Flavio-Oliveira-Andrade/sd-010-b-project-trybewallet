export const USER_LOGIN = 'USER_LOGIN';

const userLogin = (email) => ({
  type: USER_LOGIN,
  user: {
    email,
  },
});

export default userLogin;
