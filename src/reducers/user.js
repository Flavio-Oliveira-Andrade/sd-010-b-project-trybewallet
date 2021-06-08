const userDefaul = {
  email: '',
};
function userReducer(state = userDefaul, action) {
  switch (action.type) {
  case '':
    return {};
  default:
    return state;
  }
}

export default userReducer;
