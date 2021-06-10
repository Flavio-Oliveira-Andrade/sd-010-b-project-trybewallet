const selectCurrencies = (currencies) => {
  const currenciesArray = Object.keys(currencies);
  currenciesArray.splice(1, 1); // Retiro a opção USTD
  return currenciesArray;
};

export default selectCurrencies;
