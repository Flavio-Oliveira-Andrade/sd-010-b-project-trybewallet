import React from 'react';

function inputer(type, id, value, func) {
  return (
    <label htmlFor={ id }>
      {id === 'value' ? 'Valor' : 'Descrição'}
      <input
        type={ type }
        id={ id }
        value={ value }
        onChange={ func }
        data-testid={ `${id}-input` }
      />
    </label>
  );
}

export default inputer;
