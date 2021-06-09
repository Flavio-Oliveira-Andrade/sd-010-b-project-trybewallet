import { SAVE_MAIL } from '.';

export default function saveMail(email) {
  return {
    type: SAVE_MAIL,
    payload: {
      email,
    },
  };
}
