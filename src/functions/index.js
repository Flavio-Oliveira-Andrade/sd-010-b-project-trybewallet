import React from 'react';
// ---------------------------------------------------------------------------------------------
// FormsWallet

export default formCurrency = (currencies) => (
  <label
    htmlFor="coin"
  >
    Moeda:
    <select
      id="coin"
      type="number"
      name="currency"
    >
      {currencies.filter((coin) => coin !== 'USDT')
        .map((coin) => (
          <option
            key={ coin }
          >
            {coin}
          </option>
        ))}
    </select>
  </label>
);

// ---------------------------------------------------------------------------------------------
