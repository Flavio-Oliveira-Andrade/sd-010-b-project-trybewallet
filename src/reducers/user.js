export { userAction } from '../actions/index';

const INITAL_STATE = ({
  email: '',
});

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default userReducer;
