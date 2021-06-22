function getCurr(exchangeRates, dataWallet) {
  return {
    type: 'EXPENSES',
    payload: {
      ...dataWallet,
      exchangeRates,
    } };
}

// function failedRequest(error) {
//   return { type: 'FAILED_REQUEST', payload: { error } };
// }

export default function updateWallet(dataWallet) {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getCurr(json, dataWallet)),
          // (error) => dispatch(failedRequest(error)),
        ));
  };
}
