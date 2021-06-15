import React from 'react';

function InputValue({
  value = 0,
  onChangeValue = null,
}) {
  return (
    <div>
      <label htmlFor="value-id">
        Valor
        <input
          name="value"
          id="value-id"
          type="number"
          value={ value }
          onChange={ onChangeValue }
        />
      </label>
    </div>
  );
}

export default InputValue;
