export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';

export const REQUEST_API = 'REQUEST_API';

export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const submitEmail = (email) => ({ type: SUBMIT_EMAIL, email });

// export const requestCurrencies = () => ({ type: REQUEST_API });

export const getCurrencies = (currencies) => ({ type: SAVE_CURRENCIES, currencies });

export function fetchCurrencies() {
  // dispatch(requestCurrencies());
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    const responseValues = Object.values(response);
    const currenciesCode = responseValues.reduce((prev, curr) => {
      const codes = prev;
      return (curr.codein !== 'BRLT') ? codes.concat(curr.code) : codes;
    }, []);
    dispatch(getCurrencies(currenciesCode));
  };
}
