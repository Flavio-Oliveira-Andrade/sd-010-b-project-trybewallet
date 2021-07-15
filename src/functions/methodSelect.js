import React from 'react';

export default function methodSelect(list, id, value, func) {
  return (
    <label htmlFor={ id }>
      {id === 'method' ? 'Método de pagamento' : 'Tag'}
      <select id={ id } value={ value } onChange={ func } data-testid={ `${id}-input` }>
        {list.map((method) => <option key={ method }>{method}</option>)}
      </select>
    </label>
  );
}
