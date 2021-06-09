export const emailCheck = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    return 'Invalid Email';
  }
  return null;
};

export const passwordCheck = (password) => {
  const minChar = 6;
  if (password.length < minChar) {
    return 'password must be at least 6 characters long';
  }
  return null;
};
