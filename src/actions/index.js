// Coloque aqui suas actions
export const BUTTON_ENABLE = 'LBUTTON_ENABLE';
export const EMAIL_CHECK = 'EMAIL_CHECK';
export const PASSWORD_CHECK = 'PASSWORD_CHECK';

export const emailCheck = (payload) => ({
  type: EMAIL_CHECK,
  payload,
});

export const passwordCheck = (payload) => ({
  type: PASSWORD_CHECK,
  payload,
});

export const buttonEnable = (payload) => ({
  type: BUTTON_ENABLE,
  payload,
});
