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
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Lazer">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </div>
  );
}

export default InputSelectTag;
