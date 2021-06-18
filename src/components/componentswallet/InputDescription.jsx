import React from 'react';

function InputDescription({
  description = '',
  onChangeDescription = null,
}) {
  return (
    <div>
      <label htmlFor="description">
        Descrição
        <input
          name="description"
          id="description"
          type="text"
          value={ description }
          onChange={ onChangeDescription }
        />
      </label>
    </div>
  );
}

export default InputDescription;
