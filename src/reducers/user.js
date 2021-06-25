import initialState from './INITIAL_STATE';

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'loggin_sucess':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};
export default user;
