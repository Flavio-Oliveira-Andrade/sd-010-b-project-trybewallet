export const USER = "USER";
export const CURRENCIES = "CURRENCIES";

export const saveUserAction = (user) => ({
  type: USER,
  user,
});

export const saveCurrenciesAction = (data) => {
  return (dispatch) => {
    data.then((response) =>
      dispatch({ type: CURRENCIES, currencie: response })
    );
  };
};
