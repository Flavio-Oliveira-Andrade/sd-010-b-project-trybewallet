import React from 'react';

function InputDescriptionExpenses({
  labelDescription = 'Descrição da label',
  id = 'text-id',
  inputValue = '',
  onInputDescriptionChange = null,
}) {
  function handleInputTextChange({ currentTarget }) {
    if (onInputDescriptionChange) {
      const newValue = currentTarget.value;
      onInputDescriptionChange(newValue);
    }
  }
  return (
    <div>
      <div>
        <label htmlFor={ id }>
          {labelDescription}
          <input
            id={ id }
            type="text"
            value={ inputValue }
            onChange={ handleInputTextChange }
          />
        </label>
      </div>
    </div>
  );
}

export default InputDescriptionExpenses;
