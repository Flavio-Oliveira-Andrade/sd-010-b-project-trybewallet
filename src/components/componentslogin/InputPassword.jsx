import React from 'react';

function InputPassword({
  placeholder = '',
  inputValuePassword = '',
  onInputPasswordChange = null,
}) {
  function handleInputPasswordChange({ currentTarget }) {
    const newValue = currentTarget.value;
    if (onInputPasswordChange) {
      onInputPasswordChange(newValue);
    }
  }
  return (

    <input
      type="password"
      data-testid="password-input"
      value={ inputValuePassword }
      placeholder={ placeholder }
      onChange={ handleInputPasswordChange }
    />

  );
}

export default InputPassword;
