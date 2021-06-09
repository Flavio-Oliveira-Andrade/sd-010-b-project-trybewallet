import SET_LOGIN from '../actions/types';

const INITIAL_STATE = {
  email: 'olamundo@email.com',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return {
      email: action.payload,
    };
  default: return state;
  }
};

export default reducer;
