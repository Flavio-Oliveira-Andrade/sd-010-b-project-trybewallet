function emailOnChange(email) {
  return { type: 'EMAIL_CHANGE',
    payload: email };
}

export default emailOnChange;
