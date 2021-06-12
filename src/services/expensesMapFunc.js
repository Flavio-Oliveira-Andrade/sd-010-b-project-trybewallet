import React from 'react';

export default function (expense) {
  const { value, tag, description, method, exchangeRates, currency, id } = expense;
  const dirtyCurrencyName = exchangeRates[currency].name;
  const currencyName = dirtyCurrencyName.split('/')[0];
  const conversionValue = exchangeRates[currency].ask;

  const exchangeValue = parseFloat(conversionValue).toFixed(2);
  const convertedValue = (Math.round((value * conversionValue) * 100) / 100).toFixed(2);
  return (
    <tr key={ id }>
      <td>
        { description }
      </td>
      <td>
        { tag }
      </td>
      <td>
        { method }
      </td>
      <td>
        { value }
      </td>
      <td>
        { currencyName }
      </td>
      <td>
        { exchangeValue }
      </td>
      <td>
        { convertedValue }
      </td>
      <td>
        Real
      </td>
    </tr>
  );
}
