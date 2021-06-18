import React from 'react';

function InputValue({
  value = 0,
  onChangeValue = null,
}) {
  return (
    <div>
      <label htmlFor="value">
        Valor
        <input
          name="value"
          id="value"
          type="number"
          value={ value }
          onChange={ onChangeValue }
        />
      </label>
    </div>
  );
}

export default InputValue;
