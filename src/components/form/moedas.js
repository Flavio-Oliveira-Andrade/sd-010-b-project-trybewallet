import React from 'react';
import PropTypes from 'prop-types';

export default function Moedas({ currencies, currency, setCurrency }) {
  delete currencies.USDT;
  const moedas = Object.keys(currencies).map((item) => (
    <option key={ item } value={ item }>
      {item}
    </option>
  ));

  return (
    <div>
      <label htmlFor="moeda">
        Moeda :
        <select
          id="moeda"
          value={ moedas.item }
          name={ currency }
          onChange={ ({ target }) => setCurrency(target.value) }
        >
          { moedas }
        </select>
      </label>
    </div>
  );
}

Moedas.propTypes = {
  currency: PropTypes.string,
  setCurrency: PropTypes.func,
}.isRequired;
