/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function InputEmail() {
  return (
    <>
      <label htmlFor="email-id">Insira o email:</label>
      {' '}

      <input
        id="email-id"
        type="text"
        testid="email-input"
      />
    </>
  );
}

export default InputEmail;
