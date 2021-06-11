import SUBMIT_EMAIL from './index';

export default function submitEmail(email) {
  return {
    type: SUBMIT_EMAIL,
    payload: {
      email,
    },
  };
}
