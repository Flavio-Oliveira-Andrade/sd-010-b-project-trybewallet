import React from 'react';
import PropTypes from 'prop-types';

// https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
export default function Payment({ method, setMethod }) {
  return (
    <label htmlFor="payment">
      Método de pagamento :
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

Payment.propTypes = {
  method: PropTypes.string,
  setMethod: PropTypes.func,
}.isRequired;
