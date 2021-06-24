import React, { useState } from 'react';

export default function Tag() {
  const [tag, setTag] = useState({ name: 'alimentação' });

  return (
    <label htmlFor="tag">
      Tag
      <select
        name={ tag }
        id="tag"
        value={ tag }
        onChange={ ({ target }) => setTag({ name: target.value }) }
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
