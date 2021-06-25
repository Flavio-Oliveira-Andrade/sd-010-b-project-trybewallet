import React from 'react';

// https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
// eslint-disable-next-line react/prop-types
export default function Payment({ method, setMethod }) {
  return (
    <label htmlFor="payment">
      Método de method :
      <select
        name={ method }
        id="payment"
        value={ method }
        onChange={ ({ target }) => setMethod(target.value) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    </label>
  );
}
