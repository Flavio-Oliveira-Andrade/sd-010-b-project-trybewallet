import React from 'react';

function InputValue({
  labelDescription = 'Descrição da label',
  id = 'value-id',
  inputValue = 0,
  onInputValueChange = null,
}) {
  function handleInputValueChange({ currentTarget }) {
    if (onInputValueChange) {
      const newValue = currentTarget.value;
      onInputValueChange(newValue);
    }
  }

  return (
    <div>
      <label htmlFor={ id }>
        {labelDescription}
        <input
          id={ id }
          type="number"
          value={ inputValue }
          onChange={ handleInputValueChange }
        />
      </label>
    </div>
  );
}

export default InputValue;
