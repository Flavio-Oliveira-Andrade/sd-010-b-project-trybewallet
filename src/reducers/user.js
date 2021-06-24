// import { rules } from "eslint-plugin-sonarjs";

const initialState = {
  password: '',
  email: '',
  redirect: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'LOGIN':
    return {
      ...state,
      password: payload.password,
      email: payload.email,
      redirect: true,
    };
  default:
    return state;
  }
};

export default userReducer;
