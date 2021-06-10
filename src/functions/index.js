// import React from 'react';
// ---------------------------------------------------------------------------------------------
// FormsWallet
export default function sumExpenses(expenses) {
  const expenseResume = expenses.map(({ value, currency, exchangeRates }) => {
    const exchangeCoins = Object.values(exchangeRates);
    const valueNumber = parseFloat(value);
    const exchangeAsk = parseFloat(exchangeCoins
      .find((coin) => (coin.code === currency)).ask);
    const valueInBRL = valueNumber * exchangeAsk;
    const result = {
      valueNumber,
      currency,
      exchangeAsk,
      valueInBRL,
    };
    return result;
  });
  const totalExpenses = expenseResume
    .reduce((acc, currValue) => acc + currValue.valueInBRL, 0).toFixed(2);
  // console.log([...expenseResume]);
  // console.log([totalExpenses]);
  return totalExpenses;
}
// ---------------------------------------------------------------------------------------------
