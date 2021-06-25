import React from 'react';
import PropTypes from 'prop-types';

export default function Valor({ value, setValue }) {
  return (
    <div>
      <label htmlFor="valor">
        Valor :
        <input
          type="number"
          id="valor"
          name="valor"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
    </div>
  );
}

Valor.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
}.isRequired;
