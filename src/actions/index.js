const saveUserInfo = (email) => ({
  type: 'SAVE_USER_INFO',
  payload: {
    email,
  },
});

export default saveUserInfo;
