function getCurr(json) {
  const filtredsCurrs = Object
    .keys(json).filter((curr) => curr !== 'USDT' && curr !== 'DOGE');

  return { type: 'CURRENCY', payload: { filtredsCurrs } };
}

function failedRequest(error) {
  return { type: 'FAILED_REQUEST', payload: { error } };
}

export default function fetchCurrencies() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getCurr(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}
