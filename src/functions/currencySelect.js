import React from 'react';

function currencyFunc(list, val, id, func) {
  return (
    <label htmlFor={ id }>
      Moeda
      <select
        id={ id }
        value={ val }
        onChange={ func }
        data-testid="currency-input"
      >
        {Object.keys(list).filter((currency) => currency !== 'USDT')
          .map((cur) => <option key={ cur }>{cur}</option>)}
      </select>
    </label>
  );
}

export default currencyFunc;
