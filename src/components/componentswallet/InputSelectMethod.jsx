import React from 'react';

function InputSelectMethod({
  labelDescription = 'Descrição da label',
}) {
  return (
    <div>
      <label htmlFor="select-id">
        {labelDescription}
        <select name="moeda" id="select-id">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    </div>
  );
}

export default InputSelectMethod;
