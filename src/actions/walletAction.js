// I get helped by the Fabio's PR: https://github.com/tryber/sd-010-b-project-trybewallet/blob/fabio-marturano-project-trybewallet/src/actions/fetchCurrAction.js
import { CURRENCY, FAILED_REQUEST } from '.';

const filterCurrencies = (json) => {
  const filtered = Object
    .keys(json).filter((currency) => currency !== 'USDT' && currency !== 'DOGE');

  return { type: CURRENCY, payload: { filtered } };
}

const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: { error } });

export default function fetchCurrencies() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((apiResponse) => apiResponse.json()
        .then(
          (json) => dispatch(filterCurrencies(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}
