function emailOnChange(email) {
  return { type: 'EMAIL_CHANGE',
    payload: email };
}

function passwordOnChange(password) {
  return { type: 'PASSWORD_CHANGE',
    payload: password };
}

export { emailOnChange, passwordOnChange };
