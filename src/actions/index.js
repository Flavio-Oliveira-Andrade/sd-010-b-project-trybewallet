// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const ISDISABLED = 'ISDISABLED';

export const emailAction = (email) => ({
  type: EMAIL,
  email,
});

export const passwordAction = (password) => ({
  type: PASSWORD,
  password,
});

export const disabledAction = (isDisabled) => ({
  type: ISDISABLED,
  isDisabled,
});
