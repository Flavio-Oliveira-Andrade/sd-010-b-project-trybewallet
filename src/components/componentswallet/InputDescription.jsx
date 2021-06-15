import React from 'react';

function InputDescription({
  description = '',
  onChangeDescription = null,
}) {
  return (
    <div>
      <label htmlFor="description-id">
        Descrição
        <input
          name="description"
          id="description-id"
          type="text"
          value={ description }
          onChange={ onChangeDescription }
        />
      </label>
    </div>
  );
}

export default InputDescription;
