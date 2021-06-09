import React from 'react';

function InputEmail({
  id = 'id_do_input_email',
  placeholder = '',
  inputValue = '',
  onInputChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    const newValue = currentTarget.value;
    if (onInputChange) {
      onInputChange(newValue);
    }
  }
  return (

    <input
      id={ id }
      value={ inputValue }
      type="text"
      data-testid="email-input"
      placeholder={ placeholder }
      onChange={ handleInputChange }
    />
  );
}

export default InputEmail;
