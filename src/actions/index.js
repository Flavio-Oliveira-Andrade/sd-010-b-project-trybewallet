export function loginAction(email) {
  return {
    type: 'LOGIN_ACTION',
    payload: {
      email,
    },
  };
}

export function walletAction(expense) {
  return {
    type: 'WALLET_ACTION_ADD_EXPENSE',
    payload: {
      expense,
    },
  };
}

// export { loginAction, walletAction };
