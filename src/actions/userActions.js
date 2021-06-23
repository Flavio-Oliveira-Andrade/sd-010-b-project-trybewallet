import SET_EMAIL from './index';

export default function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: {
      email,
    },
  };
}
