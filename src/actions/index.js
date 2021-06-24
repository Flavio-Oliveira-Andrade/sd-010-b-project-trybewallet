export const ADDEMAIL = 'ADDEMAIL';

export const addAnEmail = (param) => ({
  type: ADDEMAIL,
  payload: {
    email: param,
  },
});
