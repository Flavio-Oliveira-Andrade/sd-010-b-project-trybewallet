export const actionLogin = (email) => (
  { type: 'LOGIN',
    email });

export const wallet = (currences, expenses) => (
  { type: 'WALLET',
    currences,
    expenses,

  });
