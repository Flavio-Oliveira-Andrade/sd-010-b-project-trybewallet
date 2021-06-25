import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Tag({ tag, setTag }) {
  return (
    <label htmlFor="tag">
      Tag
      <select
        name={ tag }
        id="tag"
        value={ tag }
        onChange={ ({ target }) => setTag(target.value) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>
  );
}
