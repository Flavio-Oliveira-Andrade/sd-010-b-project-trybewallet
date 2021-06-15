import React from 'react';

function InputSelectTag({
  inputTag = 'Alimentação',
  onChangeTag = null,
}) {
  return (
    <div>
      <label htmlFor="select-id-tag">
        Tag
        <select
          name="tag"
          id="select-id-tag"
          value={ inputTag }
          onChange={ onChangeTag }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </div>
  );
}

export default InputSelectTag;
